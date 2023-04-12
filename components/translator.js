const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');
const american = Object.keys(americanToBritishSpelling);
const british = Object.values(americanToBritishSpelling);

class Translator {
  translateToBritish(str) {
    // For Time
    str = str.replace(/(\d+)\:(\d+)/, `<span class="highlight">$1.$2</span>`);
    
    // For Basic Words
    for (let key in americanToBritishSpelling) {
      if (americanToBritishSpelling.hasOwnProperty(key)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        str = str.replace(regex, `<span class="highlight">${americanToBritishSpelling[key]}</span>`);
      };
    };

    // For Titles
    for (let key in americanToBritishTitles) {
      if (americanToBritishTitles.hasOwnProperty(key)) {
        const regex = new RegExp(key, 'gi');
        str = str.replace(regex, (match) => {
          const replacement = americanToBritishTitles[key];
          if (match.charAt(0) === match.charAt(0).toUpperCase()) {
            return `<span class="highlight">${replacement.charAt(0).toUpperCase()}${replacement.slice(1)}</span>`;
          } else {
            return `<span class="highlight">${replacement}</span>`;
          }
        });
      };
    };

    // For American Only Words
    for (let key in americanOnly) {
      if (americanOnly.hasOwnProperty(key)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        str = str.replace(regex, `<span class="highlight">${americanOnly[key]}</span>`);
      };
    };

    return str;
  }

  translateToAmerican(str) {
    // For Time
    str = str.replace(/(\d+)\.(\d+)/, `<span class="highlight">$1:$2</span>`);

    // For Basic Words
    for (const [key, value] of Object.entries(americanToBritishSpelling)) {
      const index = british.indexOf(value);
      if (index > -1) {
        const regex = new RegExp(`\\b${value}\\b`, 'gi');
        str = str.replace(regex, `<span class="highlight">${american[index]}</span>`);
      };
    };

    // For Titles
    for (const [key, value] of Object.entries(americanToBritishTitles)) {
      const index = Object.values(americanToBritishTitles).indexOf(value);
      if (index > -1) {
        const regex = new RegExp(`\\b${value}\\b`, 'gi');
        str = str.replace(regex, (match) => {
          const replacement = Object.keys(americanToBritishTitles)[index];
          if (match.charAt(0) === match.charAt(0).toUpperCase()) {
            return `<span class="highlight">${replacement.charAt(0).toUpperCase()}${replacement.slice(1)}</span>`;
          } else {
            return `<span class="highlight">${replacement}</span>`;
          }
        });
      };
    };

    // For British Only Words
    for (let key in britishOnly) {
      if (britishOnly.hasOwnProperty(key)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        str = str.replace(regex, `<span class="highlight">${britishOnly[key]}</span>`);
      };
    };

    return str;
  }
}

module.exports = Translator;