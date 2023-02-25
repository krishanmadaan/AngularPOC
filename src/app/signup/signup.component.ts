import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private http: HttpClient, private router: Router){}

  signupForm: FormGroup;

  allData: any;

  ngOnInit(){
    this.signupForm=new FormGroup({
      fullName: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email] ),
      password: new FormControl(null, [Validators.required, this.moreThanSevenCharacters]),
      mobile: new FormControl(null, [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })

      console.log(this.signupForm)

      this.http.get('http://localhost:4001/signupUsers')
      .subscribe((res)=>{
        this.allData=res;
        console.log(this.allData)
      })

  }

  signUp()
  {
        this.http.post<any>('http://localhost:4001/signupUsers', this.signupForm.value)
        .subscribe((res)=>{alert("Signup succesfull");
         this.signupForm.reset();
         this.router.navigate(['login']);
        }, (err)=>{alert("something went wrong")})
  }


  moreThanSevenCharacters(control: FormControl){
    console.log("heyy");
    //console.log(this.allData)//
    if(control.value?.length>0 && control.value?.length<=7){
      return {moreThanSevenCharacters:true}
    }
    else{
      return null
    }

  }

  // duplicateEmailNotAllowed(control: FormControl){
  //   console.log("heyy")
  //   console.log(this.allData);
  //   console.log("heyy
  //   ")
  //  if(this.allData.includes(control.value)){
  //     return of({emailNotAllowed: true})
  //  }
  //  return of(null);
  
  
  //   }



}
