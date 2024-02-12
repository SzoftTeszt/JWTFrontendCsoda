import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindenfeleComponent } from './mindenfele.component';

describe('MindenfeleComponent', () => {
  let component: MindenfeleComponent;
  let fixture: ComponentFixture<MindenfeleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MindenfeleComponent]
    });
    fixture = TestBed.createComponent(MindenfeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
