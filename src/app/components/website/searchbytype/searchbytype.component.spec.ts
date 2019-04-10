import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbytypeComponent } from './searchbytype.component';

describe('SearchbytypeComponent', () => {
  let component: SearchbytypeComponent;
  let fixture: ComponentFixture<SearchbytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
