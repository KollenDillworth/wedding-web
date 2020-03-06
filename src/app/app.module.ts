import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BridalPageComponent } from './bridal-page/bridal-page.component';
import { NavComponent } from './nav/nav.component';
import { TheWeddingPageComponent } from './the-wedding-page/the-wedding-page.component';
import { OurStoryPageComponent } from './our-story-page/our-story-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { RegistryPageComponent } from './registry-page/registry-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BridalPageComponent,
    NavComponent,
    TheWeddingPageComponent,
    OurStoryPageComponent,
    PhotosPageComponent,
    RegistryPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
