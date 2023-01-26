import com.microsoft.playwright.*;
import com.microsoft.playwright.options.AriaRole;
import org.junit.jupiter.api.*;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;


public class Signup{
    static Playwright playwright;
    static Browser browser;
    BrowserContext context;
    Page page;

    @BeforeAll
    static void launchBrowser() {
        playwright = Playwright.create();
        browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
    }

    @AfterAll
    static void closeBrowser() {
        playwright.close();
    }

    @BeforeEach
    void createContextAndPage() {
        context = browser.newContext();
        page = context.newPage();
    }

    @AfterEach
    void closeContext() {
        context.close();
    }

    @Test
    public void login_test() {
        page.navigate("https://gladimakers.netlify.app/#/");
        page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign In")).click();
        assertThat(page).hasURL("https://gladimakers.netlify.app/#/signinpage");
        page.getByPlaceholder("Email").fill("wolf@email.com");
        page.getByPlaceholder("Password").fill("wolf");
        page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign In")).click();
        assertThat(page).hasURL("https://gladimakers.netlify.app/#/dashboard");
    }
    @Test
    public void signup_test() { // fails after 1 test since email is added to database
        page.navigate("https://gladimakers.netlify.app/#/");
        page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign Up")).click();
        assertThat(page).hasURL("https://gladimakers.netlify.app/#/signuppage");
        page.getByPlaceholder("Username").fill("FatMan123");
        page.getByPlaceholder("Email").fill("FatMan123@email.com");
        page.getByPlaceholder("Password").fill("Fat2SkinnyIn3Days");
        page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign Up")).click();
        assertThat(page).hasURL("https://gladimakers.netlify.app/#/signuppage");
    }


    @Test
    public void empty_signup_test() { // fails after 1 test since email is added to database
        page.navigate("https://gladimakers.netlify.app/#/");
        page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign Up")).click();
        assertThat(page).hasURL("https://gladimakers.netlify.app/#/signuppage");
        page.getByPlaceholder("Username").fill("");
        page.getByPlaceholder("Email").fill("testaccount@email.com");
        page.getByPlaceholder("Password").fill("test");
        page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign Up")).click();
        assertThat(page).hasURL("https://gladimakers.netlify.app/#/signuppage");
    }
}
