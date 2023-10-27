import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUSERComponent } from './components/list-user/list-user.component';

const routes: Routes = [{ path: 'Lista', component: ListUSERComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
