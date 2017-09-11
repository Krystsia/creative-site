import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { HomeComponent } from '../home/home.component';
import { WorksComponent } from '../works/works.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'works',
    component: WorksComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
