import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingassignmentComponent } from './databindingassignment.component';

describe('DatabindingassignmentComponent', () => {
  let component: DatabindingassignmentComponent;
  let fixture: ComponentFixture<DatabindingassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingassignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
