import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMasterComponent } from './index-master.component';

describe('IndexMasterComponent', () => {
  let component: IndexMasterComponent;
  let fixture: ComponentFixture<IndexMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
