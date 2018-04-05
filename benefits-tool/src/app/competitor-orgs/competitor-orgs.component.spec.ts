import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorOrgsComponent } from './competitor-orgs.component';

describe('CompetitorOrgsComponent', () => {
  let component: CompetitorOrgsComponent;
  let fixture: ComponentFixture<CompetitorOrgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorOrgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
