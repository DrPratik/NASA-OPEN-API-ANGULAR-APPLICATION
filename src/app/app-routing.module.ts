import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodComponent } from './components/apod/apod.component';
import { NeoswComponent } from './components/neosw/neosw.component';
import { CuriosityComponent } from './components/curiosity/curiosity.component';


const routes: Routes = [
 { path:'',
 children: [
   {
     path:'',
     redirectTo:'apod',
     pathMatch: 'full'
   },
   {
     path:'apod',
     component: ApodComponent
   }
 ]
 },
 {
   path:'neosw',
   children: [
     {
       path:'',
       redirectTo:'neosw',
       pathMatch:'full'
     },
     {
       path:'',
       component:NeoswComponent
     }
   ]
 },
 {
   path:'curiosity',
   children:[
     {
       path:'',
       redirectTo:'curiosity',
       pathMatch:'full'
     },
     {
       path:'',
       component:CuriosityComponent
     }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
