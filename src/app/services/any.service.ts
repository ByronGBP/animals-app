import { Injectable } from '@angular/core';

@Injectable()
export class AnyService {
  valids: number = 0;
  invalids: number = 0;

  constructor() {
    console.log('any service constructor');
  }

  addValidSubmits() {
    this.valids++;
    console.log(this.getCounts());
  }

  addInvalidSubmits() {
    this.invalids++;
    console.log(this.getCounts());
  }

  getCounts() {
    return {
      valids: this.valids,
      invalids: this.invalids
    }
  }
}
