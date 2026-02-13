import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Registration } from './registration/registration';
import { About } from './about/about';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'profile', component: Profile},
    {path: 'register', component: Registration},
    {path: 'about', component: About},
];
