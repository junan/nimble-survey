import { browser, logging, until } from 'protractor';
import { SignInPage } from './sign-in.po';

describe('SignIn', () => {
  let page: SignInPage;

  beforeEach( async () => {
    page = new SignInPage();
    await page.navigateTo();
  });

  describe('Given the credentials is valid', () => {
    it('enables the submit button', async () => {
      await page.fillIn(page.emailInput(), 'john@example.com');
      await page.fillIn(page.passwordInput(), 'secret');

      expect(await page.submitButton().getAttribute('disabled')).toBeFalsy();
    });

    it('redirects to the root path after sign in', async () => {
      await page.signIn('john@example.com', 'secret');

      browser.wait(() => {
        return until.urlIs('/');
      });
    });
  });

  describe('Given the credentials is invalid', () => {
    it('disables the submit button', async () => {
      await page.fillIn(page.emailInput(), '');
      await page.fillIn(page.passwordInput(), 'secret');

      expect(await page.submitButton().getAttribute('disabled')).toBeTruthy();
    });

    it('displays the error message', async () => {
      await page.signIn('invalid@email.com', 'secret');

      browser.wait(() => {
        return until.elementIsVisible(page.alert());
      }).then(() => {
        browser.wait(() => {
          return until.elementTextIs(page.alert(), 'Something went wrong. Please try again!');
        });
      });
    });
  });
});
