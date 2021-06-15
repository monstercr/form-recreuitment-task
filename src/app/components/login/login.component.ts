import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { 
  form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(private loginService: LoginService) { }

  submitForm(): void {
    console.log(this.form.value);
    this.loginService.login(this.form.value).subscribe((response) => console.log(response))
  }
}
