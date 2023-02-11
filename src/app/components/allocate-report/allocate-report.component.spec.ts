import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateReportComponent } from './allocate-report.component';

describe('AllocateReportComponent', () => {
  let component: AllocateReportComponent;
  let fixture: ComponentFixture<AllocateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
