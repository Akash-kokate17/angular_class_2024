import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTable1Component } from './crud-table1.component';

describe('CrudTable1Component', () => {
  let component: CrudTable1Component;
  let fixture: ComponentFixture<CrudTable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudTable1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
