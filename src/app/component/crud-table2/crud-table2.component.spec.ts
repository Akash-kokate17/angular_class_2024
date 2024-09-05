import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTable2Component } from './crud-table2.component';

describe('CrudTable2Component', () => {
  let component: CrudTable2Component;
  let fixture: ComponentFixture<CrudTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudTable2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
