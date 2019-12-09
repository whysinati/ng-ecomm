import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSpecialsComponent } from './menu-specials.component';

describe('MenuSpecialsComponent', () => {
  let component: MenuSpecialsComponent;
  let fixture: ComponentFixture<MenuSpecialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSpecialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
