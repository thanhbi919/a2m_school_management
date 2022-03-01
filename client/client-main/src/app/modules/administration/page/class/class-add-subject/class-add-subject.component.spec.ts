import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAddSubjectComponent } from './class-add-subject.component';

describe('ClassAddSubjectComponent', () => {
  let component: ClassAddSubjectComponent;
  let fixture: ComponentFixture<ClassAddSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAddSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAddSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
