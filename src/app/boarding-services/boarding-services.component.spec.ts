import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingServicesComponent } from './boarding-services.component';

describe('BoardingServicesComponent', () => {
  let component: BoardingServicesComponent;
  let fixture: ComponentFixture<BoardingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
