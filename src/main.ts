// It's important that setupenv is the first import to apply overrides before anything else
import './setupenv';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { rxSchedulersGlobalPatch, setAppBuilderConfig, setupGTM } from '@infragistics/appbuilder-sdk';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import localeKo from '@angular/common/locales/ko';

rxSchedulersGlobalPatch();

setupGTM();
// Register the locale data for languages that AppBuilder supports
registerLocaleData(localeJa, 'ja');
registerLocaleData(localeKo, 'ko');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
