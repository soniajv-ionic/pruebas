import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteServicio1Component } from './cliente-servicio-1.component';

describe('ClienteServicio1Component', () => {
  let component: ClienteServicio1Component;
  let fixture: ComponentFixture<ClienteServicio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteServicio1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteServicio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
