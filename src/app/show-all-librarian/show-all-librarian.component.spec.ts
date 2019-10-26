import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllLibrarianComponent } from './show-all-librarian.component';

describe('ShowAllLibrarianComponent', () => {
  let component: ShowAllLibrarianComponent;
  let fixture: ComponentFixture<ShowAllLibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllLibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
