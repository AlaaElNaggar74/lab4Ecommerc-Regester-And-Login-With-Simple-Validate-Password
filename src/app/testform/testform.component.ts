import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css'],
})
export class TestformComponent {
  // fname: string = '';
  // overView: string = '';
  // price: number = 0;

  constructor(public _router: Router) {}

  submitGameForm(form: any) {
    console.log(form);
    console.log("dsdddd");
    
  }

  bckHome() {
    this._router.navigate(['home']);
  }
}
