import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcubComponent } from './breadcub.component';

describe('BreadcubComponent', () => {
  let component: BreadcubComponent;
  let fixture: ComponentFixture<BreadcubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
