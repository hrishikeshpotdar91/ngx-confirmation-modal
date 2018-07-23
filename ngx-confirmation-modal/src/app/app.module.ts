import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfirmationModule } from './modules/confirmation/confirmation.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConfirmationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
