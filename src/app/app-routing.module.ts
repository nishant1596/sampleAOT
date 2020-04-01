import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },
  { path: 'body', loadChildren: () => import(`./body/body.module`).then(m => m.BodyModule) },
  { path: 'footer', loadChildren: () => import(`./footer/footer.module`).then(m => m.FooterModule) }
]

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}