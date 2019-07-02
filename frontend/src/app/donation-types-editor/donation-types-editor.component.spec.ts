import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTypesEditorComponent } from './donation-types-editor.component';

describe('DonationTypesEditorComponent', () => {
  let component: DonationTypesEditorComponent;
  let fixture: ComponentFixture<DonationTypesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationTypesEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationTypesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
