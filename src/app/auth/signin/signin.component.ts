import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private serverService: ServerService) { }

  servers = [
    {
      name: 'Testserver',
      capacity: 10
    },
    {
      name: 'Testserver42',
      capacity: 42
    }
  ]



  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

  /*onSave() {
    this.serverService.storeServers()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  } */

}
