import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalorderComponent } from './evalorder.component';

describe('EvalorderComponent', () => {
  let component: EvalorderComponent;
  let fixture: ComponentFixture<EvalorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
