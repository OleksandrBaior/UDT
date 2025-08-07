import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import users from '../../data/users';

test('has title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const { buildForFreeButton, emailInput, passwordInput, signInButton,okConfiramtionButton, canvas, avatar, logoutButton, logoutConfirmationButton} = loginPage;
  
  await page.goto('/');
  await buildForFreeButton.click();
  await emailInput.fill(users.testUser.email);
  await passwordInput.fill(users.testUser.password);
  await signInButton.click();
  await okConfiramtionButton.click();
  await expect(canvas).toBeVisible({ timeout: 15000 });

  await avatar.click();
  await logoutButton.click();
  await logoutConfirmationButton.click();
  await expect(buildForFreeButton).toBeVisible();
});

