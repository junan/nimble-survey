import { browser, by, element, ElementFinder, WebElement } from 'protractor';

export class SignInPage {
  async navigateTo(): Promise<unknown>{
    return browser.get('/auth/sign-in');
  }

  emailInput(): ElementFinder{
    return element(by.id('email'));
  }

  passwordInput(): ElementFinder{
    return element(by.id('password'));
  }

  async fillIn(target: ElementFinder, value: string): Promise<void>{
    target.sendKeys(value);
  }

  async submitForm(): Promise<void>{
    element(by.buttonText('Sign in')).click();
  }

  async signIn(email: string, password: string): Promise<void>{
    this.fillIn(this.emailInput(), email);
    this.fillIn(this.passwordInput(), password);
    this.submitForm();
  }

  submitButton(): WebElement{
    return element(by.buttonText('Sign in')).getWebElement();
  }

  alert(): WebElement{
    return element(by.className('alert__message')).getWebElement();
  }
}
