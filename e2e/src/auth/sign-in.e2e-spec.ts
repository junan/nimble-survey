import { browser, logging, until } from 'protractor';
import { SignInPage } from './sign-in.po';

describe('Login tests', () => {
  let page: SignInPage;

  beforeEach(() => {
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
    it('disables the submit button', async () => {
      await page.navigateTo();
      await page.fillEmail('');
      await page.fillPassword('secret');

      expect(await page.getSubmitButton().getAttribute('disabled')).toBeTruthy();
    });

    it('displays the error message', async () => {
      await page.LoginWith('invalid@email.com', 'secret');

      browser.wait(() => {
        return until.elementIsVisible(page.getAlert());
      }).then(() => {
        browser.wait(() => {
          return until.elementTextIs(page.getAlert(), 'Something went wrong. Please try again!');
        });
      });
    });
  });

});
