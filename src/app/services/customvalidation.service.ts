// import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { FormGroup, AbstractControl } from "@angular/forms";

// @Injectable({
//   providedIn: 'root'
// })
// export class CustomvalidationService {

//   constructor(private http: HttpClient) {}

//   passwordMatchValidator(password: string, confirmPassword: string) {
//     return (formGroup: FormGroup) :any => {
//       const passwordControl = formGroup.controls[password];
//       const confirmPasswordControl = formGroup.controls[confirmPassword];

//       if (!passwordControl || !confirmPasswordControl) {
//         return null;
//       }

//       if (
//         confirmPasswordControl.errors &&
//         !confirmPasswordControl.errors?.['passwordMismatch']
//       ) {
//         return null;
//       }

//       if (passwordControl.value !== confirmPasswordControl.value) {
//         confirmPasswordControl.setErrors({ passwordMismatch: true });
//       } else {
//         confirmPasswordControl.setErrors(null);
//       }
//     };
//   }

// }
