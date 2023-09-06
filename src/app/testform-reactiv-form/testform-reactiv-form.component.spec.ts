import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestformReactivFormComponent } from './testform-reactiv-form.component';

describe('TestformReactivFormComponent', () => {
  let component: TestformReactivFormComponent;
  let fixture: ComponentFixture<TestformReactivFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestformReactivFormComponent]
    });
    fixture = TestBed.createComponent(TestformReactivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
