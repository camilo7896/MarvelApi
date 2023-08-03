import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharacterComponent } from './marvel-character.component';

describe('MarvelCharacterComponent', () => {
  let component: MarvelCharacterComponent;
  let fixture: ComponentFixture<MarvelCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarvelCharacterComponent]
    });
    fixture = TestBed.createComponent(MarvelCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
