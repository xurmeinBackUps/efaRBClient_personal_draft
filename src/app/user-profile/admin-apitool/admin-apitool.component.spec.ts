import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAPItoolComponent } from './admin-apitool.component';

describe('AdminAPItoolComponent', () => {
  let component: AdminAPItoolComponent;
  let fixture: ComponentFixture<AdminAPItoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAPItoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAPItoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
