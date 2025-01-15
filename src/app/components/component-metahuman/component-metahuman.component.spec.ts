import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMetahumanComponent } from './component-metahuman.component';

describe('ComponentMetahumanComponent', () => {
  let component: ComponentMetahumanComponent;
  let fixture: ComponentFixture<ComponentMetahumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentMetahumanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMetahumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
