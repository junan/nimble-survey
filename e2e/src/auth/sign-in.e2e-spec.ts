import { browser, logging } from 'protractor';
import { SignInPage } from './sign-in.po';

describe('Login tests', () => {
  let page: SignInPage;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    page = new SignInPage();
    page.navigateTo();
  });

  describe('Given valid credentials', () => {
    it('enables the form submit button', async () => {
      await page.fillEmail('john@example.com');
      await page.fillPassword('secret');

      expect(await page.getSubmitButton().getAttribute('disabled')).toBeFalsy();
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
