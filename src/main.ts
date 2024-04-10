// It's important that setupenv is the first import to apply overrides before anything else
import './setupenv';
import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import localeKo from '@angular/common/locales/ko';
import { rxSchedulersGlobalPatch, setupGTM } from '@infragistics/appbuilder-sdk';
import { appConfig } from './app.config';
import { AppComponent } from './app/app.component';

rxSchedulersGlobalPatch();

setupGTM();
// Register the locale data for languages that AppBuilder supports
registerLocaleData(localeJa, 'ja');
registerLocaleData(localeKo, 'ko');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
