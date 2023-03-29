import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { ArtworkComponent } from './made-with-prayers/artwork/artwork.component';
import { PatronsComponent } from './home/patrons/patrons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DonationsComponent } from './home/donations/donations.component';


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
    PaymentComponent,
    ArtworkComponent,
    PatronsComponent,
    DonationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
