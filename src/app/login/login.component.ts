import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router){}

  loginForm: FormGroup;

  ngOnInit(){

    this.loginForm= new FormGroup({
          email:new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, Validators.required)
    })

  }

  login(){
      this.http.get<object[]>('http://localhost:4001/signupUsers')
      .subscribe((res)=>{
        const user=res.find((a:any)=>{
          return a.email===this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if(user)
        {
         // alert("Login Success");
          this.loginForm.reset();
          this.router.navigate(['home'])
        }
        else{
                alert("User not found");
        }
      },(err)=>{alert("something went wrong")})
  }

}
