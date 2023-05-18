import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chopDescr'
})
export class ChopDescrPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {

    const numberOfChars = args[0] ? args[0] : 30;

    if (value.length < numberOfChars) {
      return value;
    }
    const newDescr = value.slice(0, numberOfChars)
    return newDescr + '...';
  }

}
