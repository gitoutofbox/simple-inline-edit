import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInlineEditComponent } from './simple-inline-edit.component';

describe('SimpleInlineEditComponent', () => {
  let component: SimpleInlineEditComponent;
  let fixture: ComponentFixture<SimpleInlineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleInlineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
