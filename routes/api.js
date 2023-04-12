'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      
      if(!locale || text == undefined) return res.status(400).json({ error: 'Required field(s) missing' });
      if(!text) return res.status(400).json({ error: 'No text to translate' });
      let translation;

      if (locale === 'american-to-british') {
        translation = translator.translateToBritish(text);
      } else if (locale === 'british-to-american') {
        translation = translator.translateToAmerican(text);
      } else {
        return res.status(400).json({ error: 'Invalid value for locale field' });
      };
      
      if(text == translation) translation = "Everything looks good to me!"; //return res.json({translation: "Everything looks good to me!"});

      return res.status(200).json({
        text: text,
        translation: translation,
      });
    });
};
