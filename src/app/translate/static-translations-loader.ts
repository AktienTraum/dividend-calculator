import {TranslateLoader} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';

// @ts-ignore
import * as TranslationsDE from '../../assets/i18n/de.json';
// @ts-ignore
import * as TranslationsEN from '../../assets/i18n/en.json';

interface Translation {
  [key: string]: string | Translation;
}

const TRANSLATIONS: Translation = {
  en: TranslationsEN,
  de: TranslationsDE
};

export class StaticTranslationLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<Translation | string> {
    const translation = TRANSLATIONS[lang];
    if (translation) {
      return of(translation);
    } else {
      console.error(`Unknown language: ${lang}`);
      return of({});
    }
  }
}
