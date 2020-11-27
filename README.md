# NimbleSurvey

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment

Deploy to Heroku for [staging](https://nimble-survey-staging.herokuapp.com/) and [production](https://nimble-survey-production.herokuapp.com/) release

### SVG icons

This application uses `svg-icon-sprite` npm package to generate icon sprite.Icon sprite located at `assets/images/icon-sprite.svg` which generated from SVG icons in `assets/images/icons`.
To generate the icon sprite run `npm run generate:sprite`. Use `svg-icon` tag with icon name in source path to display the icon from the sprite.

```html
<svg-icon src="assets/images/icon-sprite.svg#<icon-name>" class="icon"></svg-icon>
```

