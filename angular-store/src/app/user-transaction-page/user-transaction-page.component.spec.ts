import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTransactionPageComponent } from './user-transaction-page.component';

describe('UserTransactionPageComponent', () => {
  let component: UserTransactionPageComponent;
  let fixture: ComponentFixture<UserTransactionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTransactionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
