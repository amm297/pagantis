import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionUserComponent } from './transaction-user.component';

describe('TransactionUserComponent', () => {
  let component: TransactionUserComponent;
  let fixture: ComponentFixture<TransactionUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
