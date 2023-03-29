import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { MadeWithPrayersComponent } from './made-with-prayers/made-with-prayers.component';
import { MyPrayerArtComponent } from './my-prayer-art/my-prayer-art.component';
import { MyPrayerThankYouComponent } from './my-prayer-thank-you/my-prayer-thank-you.component';
import { MyPrayerComponent } from './my-prayer/my-prayer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';

import { environment } from './../environments/environment';
import { ArtworkComponent } from './made-with-prayers/artwork/artwork.component';
import { PatronsComponent } from './home/patrons/patrons.component';
import { DonationsComponent } from './home/donations/donations.component';

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title} - ${environment.app}`);
    } else {
      this.title.setTitle(environment.app);
    }
  }
}

const routes: Routes = [
  { 
    path: '', 
    title: 'Home',
    data: { menu: { include: true } },
    component: HomeComponent 
  },
  { 
    path: 'about-mobile', 
    title: 'About', 
    data: { menu: { include: true } },
    component: AboutComponent 
  },
  {
    path: 'app-patrons',
    title: '•  Our Patrons',
    data: {menu: {include: true}},
    component: PatronsComponent
  },
  {
    path: 'app-donations',
    title: '•  Donation Update',
    data: {menu: {include: true}},
    component: DonationsComponent
  },
  { 
    path: 'made-with-prayers', 
    title: 'Made with Prayers', 
    data: { menu: { include: true } },
    component: MadeWithPrayersComponent 
  },
  {
    path: 'app-artwork',
    title: '•  Artwork',
    data: {menu: {include: true}},
    component: ArtworkComponent
  },
  { 
    path: 'credit-card-portal', 
    title: 'Credit Card Portal',
    component: PaymentComponent 
  },
  { 
    path: 'my-prayer', 
    title: 'My Prayer',
    component: MyPrayerComponent 
  },
  { 
    path: 'made-with-prayers-art', 
    title: 'Made with Prayers - Art', 
    component: MyPrayerArtComponent 
  },
  { 
    path: 'made-with-prayers-thank-you', 
    title: 'Made with Prayers - Thank You',
    component: MyPrayerThankYouComponent 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: CustomTitleStrategy }
  ]
})
export class AppRoutingModule { }
