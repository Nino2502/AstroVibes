import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoroscoposPage } from './horoscopos.page';

describe('HoroscoposPage', () => {
  let component: HoroscoposPage;
  let fixture: ComponentFixture<HoroscoposPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroscoposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
