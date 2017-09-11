import { Injectable } from '@angular/core';

@Injectable()
export class GetDateService {

  constructor() { }

  now() {
    return Date.now().toString();
  }
}
