import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'primeng/carousel';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalCarouselComponent } from './vertical-carousel/vertical-carousel.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    VerticalCarouselComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
