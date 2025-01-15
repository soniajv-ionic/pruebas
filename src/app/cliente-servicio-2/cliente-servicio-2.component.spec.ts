import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteServicio2Component } from './cliente-servicio-2.component';

describe('ClienteServicio2Component', () => {
  let component: ClienteServicio2Component;
  let fixture: ComponentFixture<ClienteServicio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteServicio2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteServicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
