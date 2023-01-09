import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankPipe',
  pure: false,
})
export class BankPipe implements PipeTransform {
  transform(value: Date | null, bankdaysToAdd: number | null = 0): any {
    if (value === null) {
      return null;
    }

    const toAdd = bankdaysToAdd === null ? 0 : bankdaysToAdd;

    const newDate = new Date(value);

    let weekendsToAdd = Math.floor(toAdd / 5);
    let daysToAdd = toAdd % 5;
    // doesn't work quite right
    const originalWeekDay = newDate.getDay();

    if (originalWeekDay + daysToAdd > 5) {
      weekendsToAdd++;
    } else if (originalWeekDay + daysToAdd === 0) {
      daysToAdd++;
    }
    // doesn't work quite right
    const originalDate = newDate.getUTCDate();

    return newDate.setUTCDate(originalDate + (weekendsToAdd * 2 + toAdd));
  }
}
