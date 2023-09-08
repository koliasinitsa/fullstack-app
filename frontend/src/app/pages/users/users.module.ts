import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { IconModule } from 'src/app/components/icon/icon.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UsersComponent,
      },
    ]),
    IconModule,
    //UsersModule,
  ],
})
export class UsersModule { }
