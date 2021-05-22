import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesSpecificComponent } from './inves-specific.component';

describe('InvesSpecificComponent', () => {
  let component: InvesSpecificComponent;
  let fixture: ComponentFixture<InvesSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvesSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvesSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
