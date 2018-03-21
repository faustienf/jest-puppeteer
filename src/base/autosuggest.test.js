/* eslint-disable no-undef */
const autosuggestSelector = '.test-autosuggest';
const inputSelector = `${autosuggestSelector} .test-input`;
const suggestionSelector = `${autosuggestSelector} .test-suggestion`;
const selectedSuggestionSelector = `${autosuggestSelector} .test-is-active`;

let page;
beforeAll(async () => {
  page = global.PAGE;
});

async function waitSelectors() {
  await page.waitForSelector(autosuggestSelector);
  await page.waitForSelector(inputSelector);
}

function getSuggestionsCount() {
  return page.$$eval(suggestionSelector, els => els.length);
}

function getSelectedSuggestionText() {
  return page.$eval(selectedSuggestionSelector, el => el.textContent);
}

function getInputValue() {
  return page.$eval(inputSelector, el => el.value);
}

function onType(value) {
  return page.type(inputSelector, value);
}

function onKeyDown() {
  return page.keyboard.down('ArrowDown');
}

function onKeyUp() {
  return page.keyboard.down('ArrowUp');
}

function onKeyEnter() {
  return page.keyboard.down('Enter');
}

function onClick() {
  return page.click(inputSelector);
}

function onBlur() {
  return page.click('body');
}

test('autosuggest', async () => {
  let suggestionText;

  await waitSelectors();

  await onClick();

  expect(await getSuggestionsCount()).toBe(14);

  await onType('c');

  expect(await getInputValue()).toBe('c');
  expect(await getSuggestionsCount()).toBe(4);

  await onKeyDown();

  suggestionText = await getSelectedSuggestionText();
  expect(suggestionText).toBe('C');
  expect(suggestionText).toBe(await getInputValue());

  await onKeyDown();

  suggestionText = await getSelectedSuggestionText();
  expect(suggestionText).toBe('C#');
  expect(suggestionText).toBe(await getInputValue());

  await onKeyDown();

  suggestionText = await getSelectedSuggestionText();
  expect(suggestionText).toBe('C++');
  expect(suggestionText).toBe(await getInputValue());

  await onKeyDown();

  suggestionText = await getSelectedSuggestionText();
  expect(suggestionText).toBe('Clojure');
  expect(suggestionText).toBe(await getInputValue());

  await onKeyDown();

  expect(await getInputValue()).toBe('c');

  await onKeyUp();

  suggestionText = await getSelectedSuggestionText();
  expect(suggestionText).toBe('Clojure');
  expect(suggestionText).toBe(await getInputValue());

  await onKeyUp();

  suggestionText = await getSelectedSuggestionText();
  expect(suggestionText).toBe('C++');
  expect(suggestionText).toBe(await getInputValue());

  await onKeyEnter();
  await onBlur();

  expect(await getInputValue()).toBe('C++');
  expect(await getSuggestionsCount()).toBe(0);
});
