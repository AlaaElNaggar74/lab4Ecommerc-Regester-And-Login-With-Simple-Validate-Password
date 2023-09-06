import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { matchpassword } from 'src/matchPassword.validators';

import {

  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

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
  ) {}

  userForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$')]),
    userName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    confirmPassword: new FormControl(null),
  },{
    validators:matchpassword
  });



  // userForm = this.fb.group(
  //   {
  //     name: ['', [Validators.required, Validators.minLength(5)]],
  //     email: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,4}$'),
  //       ],
  //     ],
  //     userName: [
  //       '',
  //       [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')],
  //     ],

  //     password: [null, Validators.required],
  //     confirmPassword: [null],
  //   },{
  //     Validators:matchpassword
  //   }
    
  // );

  submitUserForm() {
    console.log(this.userForm);
    this._router.navigate(['/drivenForm']);
  }



}
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CustomvalidationService } from './../services/customvalidation.service';

// import {

//   Validators,
//   FormBuilder,
// } from '@angular/forms';

// @Component({
//   selector: 'app-testform-reactiv-form',
//   templateUrl: './testform-reactiv-form.component.html',
//   styleUrls: ['./testform-reactiv-form.component.css'],
// })
// export class TestformReactivFormComponent {
//   fname: string = '';
//   overView: string = '';
//   price: number = 0;

//   constructor(
//     public fb: FormBuilder,
//     public _router: Router,
//     public _customvalidator: CustomvalidationService
//   ) {}

//   userForm = this.fb.group(
//     {
//       name: ['', [Validators.required, Validators.minLength(5)]],
//       email: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,4}$'),
//         ],
//       ],
//       userName: [
//         '',
//         [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')],
//       ],

//       password: ['', Validators.required],
//       confirmPassword: ['', Validators.required],
//     }
//     ,
//     {
//       validator: this._customvalidator.passwordMatchValidator(
//         'password',
//         'confirmPassword'
//       ),
//     }
//   );

//   submitUserForm() {
//     console.log(this.userForm);
//     this._router.navigate(['/drivenForm']);
//   }
// }
