import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchUserComponent } from '../search-user/search-user.component';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SearchUserComponent
      ],
      imports:[
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSearchClick',() => {
    component.userName = 'UrbanRude';
    component.onSearchUser.subscribe(x => {
      expect(x).toEqual('UrbanRude');
    });
    component.onSearchClick();
  });

  it('should call onSearchClick on view',() => {
    component.userName = 'UrbanRude';
    component.onSearchUser.subscribe(x => {
      expect(x).toEqual('UrbanRude');
    });
    let compiled = fixture.nativeElement;
    compiled.querySelector('button').click();
  });
});
