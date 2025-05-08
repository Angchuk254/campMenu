import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NearbyPlacesComponent } from './nearby-places/nearby-places.component';

export const routes: Routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },  // Redirect to menu by default
    { path: 'menu', component: MenuComponent },
    { path: 'nearby-places', component: NearbyPlacesComponent },
];
