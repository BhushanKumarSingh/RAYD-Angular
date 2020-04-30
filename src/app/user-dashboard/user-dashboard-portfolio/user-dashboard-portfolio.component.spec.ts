import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardPortfolioComponent } from './user-dashboard-portfolio.component';

describe('UserDashboardPortfolioComponent', () => {
  let component: UserDashboardPortfolioComponent;
  let fixture: ComponentFixture<UserDashboardPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
