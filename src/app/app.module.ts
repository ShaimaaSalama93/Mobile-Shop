import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './Mobile/home.component';
import { ProductDetailsComponent } from './Mobile/ProductDetails.component';
import { ProductFilterPipe } from './Mobile/ProductFilter.pipe';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home/details/:code', component: ProductDetailsComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full'},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductFilterPipe,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent,ProductDetailsComponent],

})
export class AppModule { }

