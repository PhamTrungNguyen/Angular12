import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSonComponent } from './parent-son.component';

describe('ParentSonComponent', () => {
  let component: ParentSonComponent;
  let fixture: ComponentFixture<ParentSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
