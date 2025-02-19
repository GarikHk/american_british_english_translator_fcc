const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  const translator = new Translator();

  test('1) Translate Mangoes are my favorite fruit. to British English', () => {
    assert.strictEqual(translator.translateToBritish('Mangoes are my favorite fruit.'), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
  });

  test('2) Translate I ate yogurt for breakfast. to British English', () => {
    assert.strictEqual(translator.translateToBritish('I ate yogurt for breakfast.'), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
  });

  test("3) Translate We had a party at my friend's condo. to British English", () => {
    assert.strictEqual(translator.translateToBritish("We had a party at my friend's condo."), `We had a party at my friend's <span class="highlight">flat</span>.`);
  });

  test("4) Translate Can you toss this in the trashcan for me? to British English", () => {
    assert.strictEqual(translator.translateToBritish("Can you toss this in the trashcan for me?"), `Can you toss this in the <span class="highlight">bin</span> for me?`);
  });

  test("5) Translate The parking lot was full. to British English", () => {
    assert.strictEqual(translator.translateToBritish("The parking lot was full."), `The <span class="highlight">car park</span> was full.`);
  });

  test("6) Translate Like a high tech Rube Goldberg machine. to British English", () => {
    assert.strictEqual(translator.translateToBritish("Like a high tech Rube Goldberg machine."), `Like a high tech <span class="highlight">Heath Robinson device</span>.`);
  });

  test("7) Translate To play hooky means to skip class or work. to British English", () => {
    assert.strictEqual(translator.translateToBritish("To play hooky means to skip class or work."), `To <span class="highlight">bunk off</span> means to skip class or work.`);
  });

  test("8) Translate No Mr. Bond, I expect you to die. to British English", () => {
    assert.strictEqual(translator.translateToBritish("No Mr. Bond, I expect you to die."), `No <span class="highlight">Mr</span> Bond, I expect you to die.`);
  });

  test("9) Translate Dr. Grosh will see you now. to British English", () => {
    assert.strictEqual(translator.translateToBritish("Dr. Grosh will see you now."), `<span class="highlight">Dr</span> Grosh will see you now.`);
  });

  test("10) Translate Lunch is at 12:15 today. to British English", () => {
    assert.strictEqual(translator.translateToBritish("Lunch is at 12:15 today."), `Lunch is at <span class="highlight">12.15</span> today.`);
  });

  test("11) Translate We watched the footie match for a while. to American English", () => {
    assert.strictEqual(translator.translateToAmerican("We watched the footie match for a while."), `We watched the <span class="highlight">soccer</span> match for a while.`);
  });

  test("12) Translate Paracetamol takes up to an hour to work. to American English", () => {
    assert.strictEqual(translator.translateToAmerican("Paracetamol takes up to an hour to work."), `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
  });

  test("13) Translate First, caramelise the onions. to American English", () => {
    assert.strictEqual(translator.translateToAmerican("First, caramelise the onions."), `First, <span class="highlight">caramelize</span> the onions.`);
  });

  test("14) Translate I spent the bank holiday at the funfair. to American English", () => {
    assert.strictEqual(translator.translateToAmerican("I spent the bank holiday at the funfair."), `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`);
  });

  test("15) Translate I had a bicky then went to the chippy. to American English", () => {
    assert.strictEqual(translator.translateToAmerican("I had a bicky then went to the chippy."), `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`);
  });

  test("16) Translate I've just got bits and bobs in my bum bag. to American English", () => {
    assert.strictEqual(translator.translateToAmerican("I've just got bits and bobs in my bum bag."), `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
  });

  test("17) Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
    assert.strictEqual(translator.translateToAmerican("The car boot sale at Boxted Airfield was called off."), `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`);
  });

  test("18) Translate Have you met Mrs Kalyani? to American English", () => {
    assert.strictEqual(translator.translateToAmerican("Have you met Mrs Kalyani?"), `Have you met <span class="highlight">Mrs.</span> Kalyani?`);
  });

  test("19) Translate Prof Joyner of King's College, London. to American English", () => {
    assert.strictEqual(translator.translateToAmerican("Prof Joyner of King's College, London."), `<span class="highlight">Prof.</span> Joyner of King's College, London.`);
  });

  test("20) Translate Tea time is usually around 4 or 4.30. to American English", () => {
    assert.strictEqual(translator.translateToAmerican("Tea time is usually around 4 or 4.30."), `Tea time is usually around 4 or <span class="highlight">4:30</span>.`);
  });

  test("21) Highlight translation in Mangoes are my favorite fruit.", () => {
    const regex = new RegExp('<span class="highlight">favourite</span>');
    assert.match(translator.translateToBritish("Mangoes are my favorite fruit."), regex);
  });

  test("22) Highlight translation in I ate yogurt for breakfast.", () => {
    const regex = new RegExp('<span class="highlight">yoghurt</span>');
    assert.match(translator.translateToBritish("I ate yogurt for breakfast."), regex);
  });

  test("23) Highlight translation in We watched the footie match for a while.", () => {
    const regex = new RegExp('<span class="highlight">soccer</span>');
    assert.match(translator.translateToAmerican("We watched the footie match for a while."), regex);
  });

  test("24) Highlight translation in Paracetamol takes up to an hour to work.", () => {
    const regex = new RegExp('<span class="highlight">Tylenol</span>');
    assert.match(translator.translateToAmerican("Paracetamol takes up to an hour to work."), regex);
  });
});
