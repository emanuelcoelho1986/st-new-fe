import { INPUT_FILTER_TESTID, LIST_NAME_TESTID } from '@/components/DropdownOptions';
import { INPUT_TEST_ID, INPUT_DEFAULT_VALUE } from '@/components/DropdownSelect';
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('DropdownSelector', () => {
  test('select option from dropdown', async ({ page }) => {
    await expect(page.getByTestId(INPUT_TEST_ID)).toBeVisible();

    await expect(page.getByTestId(INPUT_TEST_ID)).toHaveValue(INPUT_DEFAULT_VALUE);

    // Select an option from dropdown
    const dropdownSelector = page.getByTestId(INPUT_TEST_ID);
    await dropdownSelector.click();

    expect(page.getByTestId(LIST_NAME_TESTID)).toBeVisible();
    expect(page.getByTestId(INPUT_FILTER_TESTID)).toBeVisible();

    const optionsListElement = page.getByTestId(LIST_NAME_TESTID);
    const optionsElements = optionsListElement.locator('li');

    expect(await optionsElements.count()).toBe(5); // 5 colors
    
    (await optionsElements.all()).at(0)?.click();

    await expect(page.getByTestId(INPUT_TEST_ID)).toHaveValue('Apple');
  });
  
  test('filter and select option from dropdown', async ({ page }) => {
    const dropdownSelector = page.getByTestId(INPUT_TEST_ID);
    await dropdownSelector.click();

    const optionsListElement = page.getByTestId(LIST_NAME_TESTID);
    const inputOptionsFilter = page.getByTestId(INPUT_FILTER_TESTID);
    const optionsElements = optionsListElement.locator('li');

    await inputOptionsFilter.fill('ba');

    expect(await optionsElements.count()).toBe(1); // 5 colors
    
    (await optionsElements.all()).at(0)?.click();

    await expect(page.getByTestId(INPUT_TEST_ID)).toHaveValue('Banana');
  });
  
  test('select option from dropdown using arrow keys', async ({ page }) => {
    // Select an option from dropdown
    const dropdownSelector = page.getByTestId(INPUT_TEST_ID);
    await dropdownSelector.click();

    expect(page.getByTestId(LIST_NAME_TESTID)).toBeVisible();
    expect(page.getByTestId(INPUT_FILTER_TESTID)).toBeVisible();

    const optionsListElement = page.getByTestId(LIST_NAME_TESTID);

    await optionsListElement.press('ArrowDown');
    await optionsListElement.press('Enter');

    await expect(page.getByTestId(INPUT_TEST_ID)).toHaveValue('Apple');
  });
  
  test('select option from dropdown after filter using arrow keys', async ({ page }) => {
    // Select an option from dropdown
    const dropdownSelector = page.getByTestId(INPUT_TEST_ID);
    await dropdownSelector.click();

    expect(page.getByTestId(LIST_NAME_TESTID)).toBeVisible();
    expect(page.getByTestId(INPUT_FILTER_TESTID)).toBeVisible();

    const optionsListElement = page.getByTestId(LIST_NAME_TESTID);
    const inputOptionsFilter = page.getByTestId(INPUT_FILTER_TESTID);

    await inputOptionsFilter.fill('ba');

    await optionsListElement.press('ArrowDown');
    await optionsListElement.press('Enter');

    await expect(page.getByTestId(INPUT_TEST_ID)).toHaveValue('Banana');
  });
  
  test('close options on ESCAPE', async ({ page }) => {
    const dropdownSelector = page.getByTestId(INPUT_TEST_ID);
    await dropdownSelector.click();

    const optionsListElement = page.getByTestId(LIST_NAME_TESTID);

    await optionsListElement.press('Escape');

    expect(page.getByTestId(LIST_NAME_TESTID)).not.toBeVisible();
  });
});

