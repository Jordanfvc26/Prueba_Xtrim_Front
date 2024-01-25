import { Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NewUserComponent } from './home/new-user/new-user.component';

export const routes: Routes = [
    { path: 'home/dashboard', component: DashboardComponent },
    { path: 'home/new-user', component: NewUserComponent },
    { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
];
