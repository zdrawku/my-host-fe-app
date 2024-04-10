import { importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { from } from 'rxjs';
import { appConfig as config } from '@infragistics/appbuilder-sdk';

/** Loader that prevents cache issues
 * https://github.com/ngx-translate/http-loader/issues/25
 */
class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
      return from(import(`../node_modules/@infragistics/appbuilder-sdk/src/assets/i18n/${lang}.json`));
  }
}

export const appConfig = {...config, providers: [...config.providers, importProvidersFrom(
  TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useClass: WebpackTranslateLoader,
      },
      defaultLanguage: 'en',
  }),
),]} 