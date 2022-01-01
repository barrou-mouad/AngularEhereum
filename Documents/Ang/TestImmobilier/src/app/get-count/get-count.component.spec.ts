import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCountComponent } from './get-count.component';

describe('GetCountComponent', () => {
  let component: GetCountComponent;
  let fixture: ComponentFixture<GetCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
