import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.scss'],
})
export class PipePageComponent {
  bpDate: Date | null = null;

  bpDateController = new FormControl<Date | null>(null);
  bpAdditionController = new FormControl<number>(0);
}
