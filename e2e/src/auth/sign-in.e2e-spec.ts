import { browser, logging, until } from 'protractor';
import { SignInPage } from './sign-in.po';

describe('Login tests', () => {
  let page: SignInPage;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    page = new SignInPage();
  });

  describe('Given the credentials is valid', () => {
    it('enables the submit button', async () => {
      await page.navigateTo();
      await page.fillEmail('john@example.com');
      await page.fillPassword('secret');

      expect(await page.getSubmitButton().getAttribute('disabled')).toBeFalsy();
    });

    it('redirects to the root path after sign in', async () => {
      await page.navigateTo();
      await page.LoginWith('john@example.com', 'secret');

      browser.wait(() => {
        return until.urlIs('/');
      });
    });
  });

  describe('Given the credentials is invalid', () => {

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
