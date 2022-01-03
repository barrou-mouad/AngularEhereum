import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCountComponent } from './get-count/get-count.component';
import { FormsModule } from '@angular/forms';
import { CountComponent } from './count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCountComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
