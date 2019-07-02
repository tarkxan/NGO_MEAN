import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsListComponent } from './donations-list.component';

describe('DonationsListComponent', () => {
  let component: DonationsListComponent;
  let fixture: ComponentFixture<DonationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
