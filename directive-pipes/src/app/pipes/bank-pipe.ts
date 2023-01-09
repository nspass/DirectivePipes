import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankPipe',
})
export class BankPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {}
}
