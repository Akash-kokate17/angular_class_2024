import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAppHttpClientComponent } from './crud-app-http-client.component';

describe('CrudAppHttpClientComponent', () => {
  let component: CrudAppHttpClientComponent;
  let fixture: ComponentFixture<CrudAppHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAppHttpClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAppHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
