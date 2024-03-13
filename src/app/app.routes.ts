import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    {path:'discover',component:DiscoverPageComponent}
];
