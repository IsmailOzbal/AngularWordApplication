import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordtypepopupComponent } from './wordtypepopup.component';

describe('WordtypepopupComponent', () => {
  let component: WordtypepopupComponent;
  let fixture: ComponentFixture<WordtypepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordtypepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordtypepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
