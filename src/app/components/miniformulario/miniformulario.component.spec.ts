import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniformularioComponent } from './miniformulario.component';

describe('MiniformularioComponent', () => {
  let component: MiniformularioComponent;
  let fixture: ComponentFixture<MiniformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniformularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
