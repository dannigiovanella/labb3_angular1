import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Convert } from './convert/convert';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: "start", component: Home },
    { path: "konvertera", component: Convert },
    { path: "om", component: About },

    //Route för tom sökväg
    { path: "", redirectTo: "start", pathMatch: "full" },

    //Route till 404-sida
    { path: "404", component: NotFound },
    { path: "**" , redirectTo: "404", pathMatch: "full" }


];
