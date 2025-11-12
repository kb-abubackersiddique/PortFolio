import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { Education } from './education/education';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: Home},
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'experience', component: Experience},
  { path: 'education', component: Education },
  { path: 'contact', component: Contact },
];
