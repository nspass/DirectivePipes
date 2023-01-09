import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivePageComponent } from './components/directive-page/directive-page.component';
import { PipePageComponent } from './components/pipe-page/pipe-page.component';
import { BankPipe } from './pipes/bank-pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    DirectivePageComponent,
    BankPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
