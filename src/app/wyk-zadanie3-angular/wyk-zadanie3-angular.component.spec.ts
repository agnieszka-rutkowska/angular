import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WykZadanie3AngularComponent } from './wyk-zadanie3-angular.component';

describe('WykZadanie3AngularComponent', () => {
  let component: WykZadanie3AngularComponent;
  let fixture: ComponentFixture<WykZadanie3AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WykZadanie3AngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WykZadanie3AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
