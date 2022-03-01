import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclassUpdateComponent } from './subclass-update.component';

describe('SubclassUpdateComponent', () => {
  let component: SubclassUpdateComponent;
  let fixture: ComponentFixture<SubclassUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubclassUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubclassUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
