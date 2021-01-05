import { browser, until } from 'protractor';
import { ForgotPasswordPage } from './forgot-password.po';

describe('ForgotPassword', () => {
  let page: ForgotPasswordPage;

  beforeEach(async () => {
    page = new ForgotPasswordPage();
    await page.navigateTo();
  });

  describe('Given valid oauth credentials', () => {
    it('enables the submit button', async () => {
      await page.fillIn(page.emailInput(), 'john@example.com');

      expect(await page.submitButton().getAttribute('disabled')).toBeFalsy();
    });

    it('displays the success message', async () => {
      await page.forgotPassword('john@example.com');

      browser
        .wait(() => {
          return until.elementIsVisible(page.alert());
        })
        .then(() => {
          browser.wait(() => {
            return until.elementTextIs(
              page.alert(),
              'We’ve email you instructions to reset your password.'
            );
          });
        });
    });
  });

  describe('Given invalid oauth credentials', () => {
    it('disables the submit button', async () => {
      await page.fillIn(page.emailInput(), '');

      expect(await page.submitButton().getAttribute('disabled')).toBeTruthy();
    });

    it('displays the error message', async () => {
      await page.forgotPassword('john@example.com');

      browser
        .wait(() => {
          return until.elementIsVisible(page.alert());
        })
        .then(() => {
          browser.wait(() => {
            return until.elementTextIs(
              page.alert(),
              'Something went wrong. Please try again!'
            );
          });
        });
    });
  });
});
