import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('should display the login page', async ({ page }) => {
    await page.goto('/auth/login')
    
    await expect(page.getByRole('heading', { name: 'Sign in to MarketHub' })).toBeVisible()
    await expect(page.getByPlaceholder('Enter your email')).toBeVisible()
    await expect(page.getByPlaceholder('Enter your password')).toBeVisible()
  })

  test('should display the registration page', async ({ page }) => {
    await page.goto('/auth/register')
    
    await expect(page.getByRole('heading', { name: 'Create your MarketHub account' })).toBeVisible()
    await expect(page.getByText('Vendor')).toBeVisible()
    await expect(page.getByText('Organizer')).toBeVisible()
  })

  test('should switch between vendor and organizer roles', async ({ page }) => {
    await page.goto('/auth/register')
    
    // Default should be vendor
    const vendorButton = page.getByRole('button', { name: /Vendor/ })
    const organizerButton = page.getByRole('button', { name: /Organizer/ })
    
    await expect(vendorButton).toHaveClass(/bg-primary/)
    
    // Switch to organizer
    await organizerButton.click()
    await expect(organizerButton).toHaveClass(/bg-primary/)
  })

  test('should validate required fields on registration', async ({ page }) => {
    await page.goto('/auth/register')
    
    // Try to submit without filling fields
    await page.getByRole('button', { name: 'Create Account' }).click()
    
    // Check for HTML5 validation or custom validation messages
    const nameInput = page.getByPlaceholder('Enter your full name')
    const emailInput = page.getByPlaceholder('Enter your email')
    const passwordInput = page.getByPlaceholder('Create a password')
    
    await expect(nameInput).toBeRequired()
    await expect(emailInput).toBeRequired()
    await expect(passwordInput).toBeRequired()
  })
})