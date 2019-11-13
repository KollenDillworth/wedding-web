import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWeddingPageComponent } from './the-wedding-page.component';

describe('TheWeddingPageComponent', () => {
  let component: TheWeddingPageComponent;
  let fixture: ComponentFixture<TheWeddingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheWeddingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWeddingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
