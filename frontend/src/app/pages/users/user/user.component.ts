import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  imgSrc: string = 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'

  constructor(
    // private readonly usersService: UsersService,
    // private readonly route: ActivatedRoute,
    // private readonly cdr: ChangeDetectorRef,
    // private readonly router: Router
  ) {
  }
}
