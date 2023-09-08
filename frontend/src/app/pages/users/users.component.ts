import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$?: Observable<IUser[]>
  isNew: boolean = false
  
  constructor(
     private readonly usersService: UsersService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.usersService.getAllUsers()
  }

}
