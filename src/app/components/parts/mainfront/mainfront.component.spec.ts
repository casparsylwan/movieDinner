import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainfrontComponent } from './mainfront.component';

describe('MainfrontComponent', () => {
  let component: MainfrontComponent;
  let fixture: ComponentFixture<MainfrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainfrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
