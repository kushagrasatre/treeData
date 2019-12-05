import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDesginComponent } from './tree-desgin.component';

describe('TreeDesginComponent', () => {
  let component: TreeDesginComponent;
  let fixture: ComponentFixture<TreeDesginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDesginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDesginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
