import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent} from './layout/full-layout/full-layout.component';
import { ProfilesComponent } from './profiles/list/profile-list.component';
import { ProfileDetailComponent } from './profiles/detail/profile-detail.component';

const routes: Routes = [
  {
    path: 'profile', component: FullLayoutComponent,
    children: [
        { path: '', component: ProfilesComponent },
        { path: 'detail/:id', component: ProfileDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
