import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpageFormComponent } from './editpage-form.component';

describe('EditpageFormComponent', () => {
  let component: EditpageFormComponent;
  let fixture: ComponentFixture<EditpageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
