import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTypeComponent } from './donation-type.component';

describe('DonationTypeComponent', () => {
  let component: DonationTypeComponent;
  let fixture: ComponentFixture<DonationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
