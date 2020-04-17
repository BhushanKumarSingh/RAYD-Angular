import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderTechnicianComponent } from './service-provider-technician.component';

describe('ServiceProviderTechnicianComponent', () => {
  let component: ServiceProviderTechnicianComponent;
  let fixture: ComponentFixture<ServiceProviderTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
