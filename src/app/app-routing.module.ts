import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import access to the several different pages for the router
//
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClientsComponent } from './clients/clients.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { BoardingServicesComponent } from './boarding-services/boarding-services.component';
import { RatesComponent } from './rates/rates.component';
import { AboutComponent } from './about/about.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'boarding-services', component: BoardingServicesComponent},
  { path: 'rates', component: RatesComponent },
  { path: 'about', component: AboutComponent }
]
@NgModule({
  imports: [
  RouterModule.forRoot(routes)

  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
