import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankPipe',
})
export class BankPipe implements PipeTransform {
  transform(value: Date | null, bankdaysToAdd: number | null = 0): any {
    if (value === null) {
      return null;
    }

    let toAdd = bankdaysToAdd === null ? 0 : bankdaysToAdd;

    const newDate = new Date(value);

    let weekendsToAdd = Math.floor(toAdd / 5);
    const daysToAdd = toAdd % 5;

    let originalWeekDay = newDate.getDay();

    let additionalDays = 0;
    if (originalWeekDay === 0) {
      additionalDays = 1;
      originalWeekDay = 1;
    } else if (originalWeekDay === 6) {
      additionalDays = 2;
      originalWeekDay = 1;
    }

    if (originalWeekDay + daysToAdd > 5) {
      weekendsToAdd++;
    }

    const originalDate = newDate.getUTCDate();

    toAdd = toAdd + additionalDays + weekendsToAdd * 2;

    return newDate.setUTCDate(originalDate + toAdd);
  }
}
