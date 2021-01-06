import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarMasterComponent } from './top-bar-master.component';

describe('TopBarMasterComponent', () => {
  let component: TopBarMasterComponent;
  let fixture: ComponentFixture<TopBarMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
