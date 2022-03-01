import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclassDiaryComponent } from './subclass-diary.component';

describe('SubclassDiaryComponent', () => {
  let component: SubclassDiaryComponent;
  let fixture: ComponentFixture<SubclassDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubclassDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubclassDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
