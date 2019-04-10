import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyaddressComponent } from './searchbyaddress.component';

describe('SearchbyaddressComponent', () => {
  let component: SearchbyaddressComponent;
  let fixture: ComponentFixture<SearchbyaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbyaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
