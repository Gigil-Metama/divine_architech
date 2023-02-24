import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MadeWithPrayersComponent } from './made-with-prayers/made-with-prayers.component';
import { MyPrayerComponent } from './my-prayer/my-prayer.component';
import { MyPrayerArtComponent } from './my-prayer-art/my-prayer-art.component';
import { MyPrayerThankYouComponent } from './my-prayer-thank-you/my-prayer-thank-you.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MadeWithPrayersComponent,
    MyPrayerComponent,
    MyPrayerArtComponent,
    MyPrayerThankYouComponent,
    PageNotFoundComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
