import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            await page.goto("http://localhost:3000", timeout=60000)

            # Check Navbar Logo
            navbar_logo_container = page.locator("nav a div.relative")
            # We expect classes to contain w-[140px] and md:w-[168px]
            nav_class = await navbar_logo_container.get_attribute("class")
            print(f"Navbar Logo Class: {nav_class}")

            # Check Footer Logo
            footer_logo_container = page.locator("footer div.relative").first
            footer_class = await footer_logo_container.get_attribute("class")
            print(f"Footer Logo Class: {footer_class}")

            if "w-[140px]" in nav_class and "w-[140px]" in footer_class:
                print("SUCCESS: Logo classes found.")
            else:
                print("FAILURE: Logo classes mismatch.")

            await page.screenshot(path="verification/logo_verification.png", full_page=True)

        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
