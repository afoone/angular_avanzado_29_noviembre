import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/02-service/user';
import { UserService } from 'src/app/02-service/user.service';

@Component({
  selector: 'test-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[]

  constructor(private _userService: UserService) {
    this.users = []
  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(
      {
        next: res => this.users= res,
        error: err => console.log(err),
        complete: () => console.log("terminado el getusers")
      }
    )
  }

}
