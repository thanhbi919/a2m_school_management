import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclassAddComponent } from './subclass-add.component';

describe('SubclassAddComponent', () => {
  let component: SubclassAddComponent;
  let fixture: ComponentFixture<SubclassAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubclassAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubclassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
