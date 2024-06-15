import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLivrosComponent } from './card-livros.component';

describe('CardLivrosComponent', () => {
  let component: CardLivrosComponent;
  let fixture: ComponentFixture<CardLivrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLivrosComponent]
    });
    fixture = TestBed.createComponent(CardLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
