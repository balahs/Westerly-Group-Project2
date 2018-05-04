import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuongComponent } from './cuong.component';

describe('CuongComponent', () => {
  let component: CuongComponent;
  let fixture: ComponentFixture<CuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
