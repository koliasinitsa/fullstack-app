import { NgModule } from '@angular/core';
import { CommonModule, DatePipe  } from '@angular/common';
import { UsersComponent } from './users.component';
import { IconModule } from 'src/app/components/icon/icon.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserFormModule } from 'src/app/components/user-form/user-form.module';




@NgModule({
  declarations: [ UsersComponent, UserComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UsersComponent, children: [
          { path: ':id', component: UserComponent },
        ],
      },
    ]),
    IconModule,
    UserFormModule,
  ],
})
export class UsersModule {
}