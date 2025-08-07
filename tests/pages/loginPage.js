export class LoginPage  {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.buildForFreeButton = page.getByRole('banner').getByRole('button', { name: 'Build for free' });
        this.emailInput = page.getByRole('textbox', { name: 'Enter your email or phone' });
        this.passwordInput = page.getByRole('textbox', { name: 'Enter password' });
        this.signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
        this.okConfiramtionButton = page.getByRole('button', { name: 'Ok' });
        this.canvas = page.locator('iframe').contentFrame().locator('#unity-app-canvas');
        this.avatar = page.getByRole('button', { name: 'Account avatar' });
        this.logoutButton = page.getByText('Log Out');
        this.logoutConfirmationButton = page.getByRole('button', { name: 'Log Out' });
    }
}
