import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsingSubjectComponent } from './crud-using-subject.component';

describe('CrudUsingSubjectComponent', () => {
  let component: CrudUsingSubjectComponent;
  let fixture: ComponentFixture<CrudUsingSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudUsingSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudUsingSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
