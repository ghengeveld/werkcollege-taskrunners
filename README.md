# Werkcollege Grunt en Gulp

Maak eerst een package.json (`npm init`).

## Opdrachten met Grunt

1. Installeer een lokale Grunt (via package.json)
2. Maak een `Gruntfile.js`
3. Maak een `grunt sass` taak die app.scss compileert naar app.css (in dezelfde map)
4. Maak een `grunt clean` taak die app.css weer verwijdert

## Opdrachten met Gulp

1. Installeer een lokale Gulp (via package.json)
2. Maak een `gulpfile.js`
3. Maak een `gulp sass` taak die app.scss compileert naar app.css (in dezelfde map)
4. Maak een `gulp clean` taak die app.css weer verwijdert

## Extra opdrachten
Met Grunt of Gulp, naar eigen voorkeur.

1. Maak een `build` taak die:
  - De `dist` map leeg maakt
  - Sass compileert
  - Stylesheets minified
  - Scripts minified
  - HTML minified
  - De resultaten wegschrijft naar de `dist` map met behoud van structuur
2. Maak een `watch` taak die:
  - Wijzigingen in .scss files detecteert, en vervolgens:
  - Sass compileert
3. Maak een `init` taak die:
  - Een simpele HTTP server start
  - Je browser opent op de root URL van deze server
  - De `watch` taak start

## Tips

- Switch naar de branches `grunt` of `gulp` voor de uiteindelijke configuratie
- Gebruik `git reset --hard HEAD` om locale wijzigingen ongedaan te maken
- Gebruik `git clean -d -x -f` om untracked files te verwijderen (bijv. node_modules)
