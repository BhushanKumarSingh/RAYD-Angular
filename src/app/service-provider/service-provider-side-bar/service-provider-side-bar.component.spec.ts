import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderSideBarComponent } from './service-provider-side-bar.component';

describe('ServiceProviderSideBarComponent', () => {
  let component: ServiceProviderSideBarComponent;
  let fixture: ComponentFixture<ServiceProviderSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
