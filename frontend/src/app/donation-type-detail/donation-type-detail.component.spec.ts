import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTypeDetailComponent } from './donation-type-detail.component';

describe('DonationTypeDetailComponent', () => {
  let component: DonationTypeDetailComponent;
  let fixture: ComponentFixture<DonationTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
