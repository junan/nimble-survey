import { browser, by, element, ElementFinder, WebElement } from 'protractor';

export class ForgotPasswordPage {
  async navigateTo(): Promise<unknown> {
    return browser.get('/auth/forgot-password');
  }

  emailInput(): ElementFinder {
    return element(by.id('email'));
  }

  async fillIn(target: ElementFinder, value: string): Promise<void> {
    target.sendKeys(value);
  }

  async submitForm(): Promise<void> {
    element(by.buttonText('Send Recovery Email')).click();
  }

  async forgotPassword(email: string): Promise<void> {
    this.fillIn(this.emailInput(), email);
    this.submitForm();
  }

  submitButton(): WebElement {
    return element(by.buttonText('Send Recovery Email')).getWebElement();
  }

  alert(): WebElement {
    return element(by.className('alert__message')).getWebElement();
  }
}
