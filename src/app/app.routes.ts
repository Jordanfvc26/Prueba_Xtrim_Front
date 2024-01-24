import { Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'home/dashboard', component: DashboardComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
