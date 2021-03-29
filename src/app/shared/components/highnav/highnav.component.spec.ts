import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighnavComponent } from './highnav.component';

describe('HighnavComponent', () => {
  let component: HighnavComponent;
  let fixture: ComponentFixture<HighnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
