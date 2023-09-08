import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { IconModule } from 'src/app/components/icon/icon.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UsersComponent, children: [
          {path: ':id', component: UserComponent}
        ]
      },
    ]),
    IconModule,
    //UsersModule,
  ],
})
export class UsersModule { }
