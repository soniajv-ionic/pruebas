import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMetaInfoComponent } from './component-meta-info.component';

describe('ComponentMetaInfoComponent', () => {
  let component: ComponentMetaInfoComponent;
  let fixture: ComponentFixture<ComponentMetaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentMetaInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMetaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
