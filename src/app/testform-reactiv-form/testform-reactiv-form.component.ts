import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
// import { CustomvalidationService } from '../services/customvalidation.service';
// import { CustomValidationService } from "../services/custom-validation.service";

@Component({
  selector: 'app-testform-reactiv-form',
  templateUrl: './testform-reactiv-form.component.html',
  styleUrls: ['./testform-reactiv-form.component.css'],
})
export class TestformReactivFormComponent {
  fname: string = '';
  overView: string = '';
  price: number = 0;

  constructor(
    public fb: FormBuilder,
    public _router: Router,
    // public _customvalidator: CustomvalidationService
  ) {}

  // userForm: FormGroup = new FormGroup({
  //   name: new FormControl('',[Validators.required,Validators.minLength(5)]),
  //   // email: new FormControl('',[Validators.required,Validators.email]),
  //   email: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$')]),
  //   userName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]),
  //   // password: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{8,}$')]),
  //   // password: new FormControl('',[Validators.required,Validators.pattern('(?=.{8,})(?=.*[a-z])(?=.*[A-Z])')]),
  //   password: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]),
  //   // password: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$')]),
  //   confirmPassword: new FormControl(null,Validators.required),
  // },{validator:this._customvalidator.passwordMatchValidator("password","confirmPassword")});

  userForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,4}$'),
        ],
      ],
      userName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')],
      ],

      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }
    // ,
    // {
    //   validator: this._customvalidator.passwordMatchValidator(
    //     'password',
    //     'confirmPassword'
    //   ),
    // }
  );

  submitUserForm() {
    console.log(this.userForm);
    this._router.navigate(['/drivenForm']);
  }
}
