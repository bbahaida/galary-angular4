import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {AboutService} from '../services/about.service';
import {RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';


const appRoute: Routes=[
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"",redirectTo:"/about" , pathMatch:"full"}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
