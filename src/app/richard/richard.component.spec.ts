import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichardComponent } from './richard.component';

describe('RichardComponent', () => {
  let component: RichardComponent;
  let fixture: ComponentFixture<RichardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
