import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombrarFotosComponent } from './nombrar-fotos.component';

describe('NombrarFotosComponent', () => {
  let component: NombrarFotosComponent;
  let fixture: ComponentFixture<NombrarFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombrarFotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombrarFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
