import { Component, OnInit } from '@angular/core';
import { AdminUserManagementService } from '../services/admin-user-management.service';
import { Router } from '@angular/router';
import { IUser } from '../User';
import { IUserBasic } from '../UserBasic';


//for Entries from database

export interface AdminData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Role: string;
}

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})

export class AdminViewComponent implements OnInit {

  displayedColumns: string[] = ['FirstName', 'LastName', 'Email', 'Password', 'Role', 'Action'];
  dataSource;
  hasError = false;
  errMsg = '';

  constructor(private adminUserService: AdminUserManagementService) {

  }

  // get initial data
  refresh() {
    this.adminUserService.getAllUsers().subscribe(data => {
      this.dataSource = data;
      console.log('Initial Users Data: ', data);
    });
  }

  ngOnInit() {
    this.refresh();
  }

  editUser(el,
           userItem) {
    // Gets the database ID from element attribute
    console.log("userItem._id: " + el._id)
    // const userID = (userItem as HTMLElement).getAttribute('id');
    this.adminUserService.getUserById(el._id).subscribe(data => {
      this.toggleActiveUser(userItem);
    });
  }

  // deleteUser(userItem) {
  //   let userID = (userItem as HTMLElement).getAttribute('id');
  //   this.adminUserService.deleteUserById(userID).subscribe(data => {
  //     console.log(data);
  //     (userItem as HTMLElement).style.opacity='0';
  //     (userItem as HTMLElement).style.height='0';
  //   });

  deleteUser(el) {
    console.log('user id to remove: ' + el._id);
    this.adminUserService.deleteUserById(el._id).subscribe(data => {
      this.refresh();
    });

    // location.reload();
  }

  saveUser(el,
           userItem){
    let userData: IUserBasic = {
      firstname: el.firstname,
      lastname: el.lastname,
      email: el.email,
      password: el.password,
      role: el.role
    };

    // this.adminUserService.updateUser(el._id, userData).subscribe(data => {
    //   this.toggleActiveUser(userItem);
    // });

    // if the user exists (has _id) - call updateUser()
    if (el._id != null) {
      this.adminUserService.updateUser(el._id, userData).subscribe(body => {
        console.log('Submitted to server');
        console.log(body);
        // this.toggleActiveUser(userItem);
        },
        error => {console.log(error); }
      );
    }else{ // if the user dpes not exist (has no _id) - call addUser()
      this.adminUserService.addUser(userData).subscribe(body => {
        console.log('Submitted to server');
        console.log(body);
        // this.toggleActiveUser(userItem);
        },
        error => {console.log(error); }
      );
    }
    // location.reload();
    this.refresh();
  }

  // const data: IDonationType = {
  //   type_name: donationTypeForm.value.typeName,
  //   is_active : donationTypeForm.value.isActive,
  //   monthly_recurrence: donationTypeForm.value.monthlyRecurrence
  // };

  // this.service.addDonationType(data).subscribe(
  //   body => {console.log('Submitted to server'); console.log(body); },
  //   error => {console.log(error); }
  // );

  // this.router.navigate(['/types']);

  // saveUser(userItem){
  //   let userID = (userItem as HTMLElement).getAttribute('id');
  //   // Will make the user object model to send to server
  //   let savedUser = {};
  //   let inputs = (userItem as HTMLElement).getElementsByTagName('input');

  //   for (let i = 0; i < inputs.length; i++) {
  //     // If a input is blank, stop and display error
  //     if(inputs[i].value === '') return this.errorMsg("Fields should not be left empty")
  //     // If email is not an email, stop and display error
  //     if(inputs[i].name === 'email' && !this.validateEmail(inputs[i].value)) return this.errorMsg("Invalid Email")

  //     // Add the prop name and value to blank user object
  //     let prop = inputs[i].name;
  //     let key = inputs[i].value;
  //     savedUser[prop] = key;
  //   }
  //   // Gets the dropdown values
  //   let dropdown = (userItem as HTMLElement).getElementsByTagName('select');

  //   // Check if dropdown box is empty to display error
  //   if(dropdown[0].value === '') return this.errorMsg("User role should not be left empty")
  //   // Adds the role prop from the drop down box.
  //   savedUser[dropdown[0].name] = dropdown[0].value;


  //   if (userID){
  //     // If the userID is valid then the user will be updated
  //     this.adminUserService.updateUser(userID,savedUser).subscribe(data => {
  //       console.log(data)
  //     })
  //   } else {
  //     // No userID indicates a new user so it will be added
  //     this.adminUserService.addUser(savedUser).subscribe(data => {
  //       console.log(data);
  //       // The id is send back as a response and applied to the item
  //       (userItem as HTMLElement).setAttribute('id',(data as any)._id);
  //       (userItem as HTMLElement).title = `ID: ${(data as any)._id}`;
  //       // The buttons to edit or delete are activated
  //       let buttons = (userItem as HTMLElement).getElementsByTagName('button');
  //       for (let i = 0; i < buttons.length; i++) {
  //         buttons[i].classList.remove('editBtn-active');
  //         buttons[i].classList.remove('deleteBtn-active');
  //       }
  //     })
  //   }

  //   // Disales the user editing
  //   this.toggleActiveUser(userItem);

  // }

  // Pushes a blank User Model to the array of users
  // Admin will fill the data before POST to server
  addUser(userTableBody){
    this.dataSource.push({
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": "",
      "role": ""
    })
  }

  // toggleActiveUser(userItem){
  //   // Gets elements and toggles the inputs to allow editing
  //   let inputs = (userItem as HTMLElement).getElementsByTagName('input');
  //   (userItem as HTMLElement).classList.toggle('active');
  //   for (let i = 0; i < inputs.length; i++) {
  //     inputs[i].toggleAttribute('disabled');
  //     // Will reveal the password on editing
  //     if(inputs[i].name === 'password') {
  //       if(inputs[i].type === 'password') {
  //         inputs[i].type = 'string'
  //       } else {
  //         inputs[i].type = 'password'
  //       }
  //     }
  //   }

  toggleActiveUser(userItem){
    // Gets elements and toggles the inputs to allow editing
    let inputs = (userItem as HTMLElement).getElementsByTagName('input');
    // (userItem as HTMLElement).classList.toggle('active');
    (userItem as HTMLElement).classList.toggle('active');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].toggleAttribute('disabled');
      // Will reveal the password on editing
      if(inputs[i].name === 'password') {
        if(inputs[i].type === 'password') {
          inputs[i].type = 'string'
        } else {
          inputs[i].type = 'password'
        }
      }
    }

    let dropdown = (userItem as HTMLElement).getElementsByTagName('select');
    dropdown[0].toggleAttribute('disabled');

    // Reveals save button
    let saveBtn = (userItem as HTMLElement).getElementsByClassName('saveBtn');
    saveBtn[0].toggleAttribute('disabled');
    saveBtn[0].classList.toggle('saveBtn-active')
  }

  errorMsg(message){
    this.hasError = true;
    this.errMsg = message;
    setTimeout(()=>{
      this.hasError = false;
      this.errMsg = '';
    },3000);
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
