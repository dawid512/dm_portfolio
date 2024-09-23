import { Routes } from '@angular/router';
import { ContactComponent } from './ui/contact/contact.component';
import { ExperienceComponent } from './ui/experience/experience.component';
import { HomeComponent } from './ui/home/home.component';
import { TechstackComponent } from './ui/techstack/techstack.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'techstack', component: TechstackComponent },
    { path: 'contact', component: ContactComponent },
  ];