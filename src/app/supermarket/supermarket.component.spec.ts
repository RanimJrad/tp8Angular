import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketComponent } from './supermarket.component';

describe('SupermarketComponent', () => {
  let component: SupermarketComponent;
  let fixture: ComponentFixture<SupermarketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupermarketComponent]
    });
    fixture = TestBed.createComponent(SupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
