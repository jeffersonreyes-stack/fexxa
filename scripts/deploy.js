const { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectsCommand } = require("@aws-sdk/client-s3");
const { CloudFrontClient, CreateInvalidationCommand } = require("@aws-sdk/client-cloudfront");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");

// Configuration
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const DISTRIBUTION_ID = process.env.CLOUDFRONT_DISTRIBUTION_ID;
const REGION = process.env.AWS_REGION || "us-east-1"; // Default to us-east-1 if not provided
const BUILD_DIR = path.join(__dirname, "../out");

if (!BUCKET_NAME || !DISTRIBUTION_ID) {
  console.error("Error: AWS_BUCKET_NAME and CLOUDFRONT_DISTRIBUTION_ID environment variables must be set.");
  process.exit(1);
}

const hasExplicitCredentials =
  !!process.env.AWS_ACCESS_KEY_ID && !!process.env.AWS_SECRET_ACCESS_KEY;

const awsClientConfig = hasExplicitCredentials
  ? {
      region: REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    }
  : { region: REGION };

const s3Client = new S3Client(awsClientConfig);
const cloudFrontClient = new CloudFrontClient(awsClientConfig);

async function uploadFile(filePath, key) {
  const fileContent = fs.readFileSync(filePath);
  const contentType = mime.lookup(filePath) || "application/octet-stream";

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: fileContent,
    ContentType: contentType,
  });

  try {
    await s3Client.send(command);
    console.log(`Uploaded: ${key} (${contentType})`);

    if (key.endsWith(".html") && key !== "index.html" && key !== "404.html") {
      const extensionlessKey = key.slice(0, -5);
      const extensionlessCommand = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: extensionlessKey,
        Body: fileContent,
        ContentType: "text/html",
      });

      await s3Client.send(extensionlessCommand);
      console.log(`Uploaded route alias: ${extensionlessKey} (text/html)`);
    }
  } catch (err) {
    console.error(`Error uploading ${key}:`, err);
    throw err;
  }
}

async function uploadDirectory(directoryPath, baseKey = "") {
  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const key = baseKey ? `${baseKey}/${file}` : file;

    if (fs.statSync(filePath).isDirectory()) {
      await uploadDirectory(filePath, key);
    } else {
      await uploadFile(filePath, key);
    }
  }
}

async function invalidateCloudFront() {
  const command = new CreateInvalidationCommand({
    DistributionId: DISTRIBUTION_ID,
    InvalidationBatch: {
      CallerReference: Date.now().toString(),
      Paths: {
        Quantity: 1,
        Items: ["/*"],
      },
    },
  });

  try {
    const response = await cloudFrontClient.send(command);
    console.log(`Invalidation created: ${response.Invalidation.Id}`);
  } catch (err) {
    console.error("Error creating invalidation:", err);
    throw err;
  }
}

async function main() {
  console.log(`Starting deployment to bucket: ${BUCKET_NAME}`);

  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`Build directory not found: ${BUILD_DIR}. Run 'npm run build' first.`);
    process.exit(1);
  }

  try {
    await uploadDirectory(BUILD_DIR);
    console.log("All files uploaded successfully.");

    console.log(`Invalidating CloudFront distribution: ${DISTRIBUTION_ID}`);
    await invalidateCloudFront();

    console.log("Deployment complete!");
  } catch (err) {
    console.error("Deployment failed:", err);
    process.exit(1);
  }
}

main();
