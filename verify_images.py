from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('http://localhost:39169/estructura-metalica')
        page.wait_for_selector('img')
        images = page.evaluate('''() => {
            return Array.from(document.querySelectorAll('img')).map(img => {
                return {src: img.src, complete: img.complete, naturalWidth: img.naturalWidth};
            });
        }''')
        for img in images:
            print(img)
        browser.close()

verify()
