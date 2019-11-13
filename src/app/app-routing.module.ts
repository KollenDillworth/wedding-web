import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BridalPageComponent } from './bridal-page/bridal-page.component';
import { TheWeddingPageComponent } from './the-wedding-page/the-wedding-page.component';
import { OurStoryPageComponent } from './our-story-page/our-story-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { RegistryPageComponent } from './registry-page/registry-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'our-story', component: OurStoryPageComponent},
  {path: 'the-wedding', component: TheWeddingPageComponent},
  {path: 'bridal', component: BridalPageComponent},
  {path: 'photos', component: PhotosPageComponent},
  {path: 'registry', component: RegistryPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
