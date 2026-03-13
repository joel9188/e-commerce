import { Routes } from '@angular/router';
import { on } from 'events';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Products } from './product/product';
import { Details } from './details/details';


export const routes: Routes = [
    {path: '', component: Home},
    {path:'contact', component: Contact},
    {path:'product', component: Products},
    {path:'details', component: Details},
    {path:'product/:id', component: Details},
];
