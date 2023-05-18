import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentAge'
})
export class CurrentAgePipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    const now = new Date();
    const year = now.getFullYear();
    const age = year - value;
    return age;
  }

}
