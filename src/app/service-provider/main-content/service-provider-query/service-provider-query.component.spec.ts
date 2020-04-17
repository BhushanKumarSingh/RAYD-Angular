import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderQueryComponent } from './service-provider-query.component';

describe('ServiceProviderQueryComponent', () => {
  let component: ServiceProviderQueryComponent;
  let fixture: ComponentFixture<ServiceProviderQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
