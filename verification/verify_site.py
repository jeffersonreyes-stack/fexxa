from playwright.sync_api import sync_playwright

def verify_site(page):
    # Home Page
    page.goto("http://localhost:3000")
    page.wait_for_selector("h1") # Wait for Hero title
    page.screenshot(path="/home/jules/verification/home.png", full_page=True)
    print("Home screenshot taken.")

    # Experiencia Page
    page.goto("http://localhost:3000/experiencia")
    page.wait_for_selector("table") # Wait for table
    page.screenshot(path="/home/jules/verification/experiencia.png", full_page=True)
    print("Experiencia screenshot taken.")

    # Contacto Page
    page.goto("http://localhost:3000/contacto")
    page.wait_for_selector("form")
    page.screenshot(path="/home/jules/verification/contacto.png", full_page=True)
    print("Contacto screenshot taken.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_site(page)
        finally:
            browser.close()
