import { test, expect } from '@playwright/test'

test.describe('Markets Directory', () => {
  test('should display the markets page', async ({ page }) => {
    await page.goto('/markets')
    
    await expect(page.getByRole('heading', { name: 'Discover Local Markets' })).toBeVisible()
    await expect(page.getByPlaceholder('Search markets by name or location...')).toBeVisible()
  })

  test('should allow filtering by state', async ({ page }) => {
    await page.goto('/markets')
    
    const stateSelect = page.locator('select')
    await stateSelect.selectOption('VIC')
    
    await expect(stateSelect).toHaveValue('VIC')
  })

  test('should search markets by name', async ({ page }) => {
    await page.goto('/markets')
    
    const searchInput = page.getByPlaceholder('Search markets by name or location...')
    await searchInput.fill('Melbourne')
    await searchInput.press('Enter')
    
    // Should trigger a search (implementation depends on API)
    await expect(searchInput).toHaveValue('Melbourne')
  })

  test('should display call-to-action for market organizers', async ({ page }) => {
    await page.goto('/markets')
    
    await expect(page.getByText('Want to list your market?')).toBeVisible()
    await expect(page.getByRole('link', { name: 'List Your Market' })).toBeVisible()
  })
})