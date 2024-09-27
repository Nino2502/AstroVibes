import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZodiacalesPage } from './zodiacales.page';

describe('ZodiacalesPage', () => {
  let component: ZodiacalesPage;
  let fixture: ComponentFixture<ZodiacalesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
