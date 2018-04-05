import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliasBenefitsComponent } from './relias-benefits.component';

describe('ReliasBenefitsComponent', () => {
  let component: ReliasBenefitsComponent;
  let fixture: ComponentFixture<ReliasBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliasBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliasBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
