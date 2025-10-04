import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({ name: 't', standalone: true })
export class TPipe implements PipeTransform {
  constructor(private tr: TranslateService) {}
  transform(key: string) { return this.tr.t(key); }
}
