import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIssuedBooksComponent } from './get-issued-books.component';

describe('GetIssuedBooksComponent', () => {
  let component: GetIssuedBooksComponent;
  let fixture: ComponentFixture<GetIssuedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIssuedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
