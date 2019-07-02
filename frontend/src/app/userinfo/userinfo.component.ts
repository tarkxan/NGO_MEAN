import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { Router } from '@angular/router';



@Component ({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  @Input() userid: number;
  @Input() u_role: string = 'user';
  user = [];
  isAdmin: boolean;
  user_id: string;

  constructor(private service: UserService,
              private loginUser: NavigationComponent,
              private router: Router ) {

    this.isAdmin = this.loginUser.isAdmin;
    this.user_id = this.loginUser.user_id;
    console.log("this.isAdmin:" + this.isAdmin);
    console.log("this.loginUser.isAdmin:" + this.loginUser.isAdmin);
    console.log("this.user_id:" + this.user_id);

    this.user_id = this.loginUser.returnLoginUserId();
    console.log("this.user_id !!!!!:" + this.user_id);
  }

  ngOnInit() {
    this.service.getUser(this.user_id)
        .subscribe(data => {this.user = data; console.log('data' + data); });
  }

  onSubmit(userform: FormControl) {
    console.log(userform.value);
    this.service.updateUser(this.user_id, userform.value)
      .subscribe(data => { data = userform.value; console.log('data' + data); });

    this.router.navigate(['/makedonation']);
  }

}
