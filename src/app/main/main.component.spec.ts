import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './main.component';
import {GitHubCardComponent} from "../git-hub-card/git-hub.card.component";
import { SearchUserComponent } from '../search-user/search-user.component';
import { MATERIAL_COMPONENTS } from '../app.module';
import { APP_PROVIDERS } from '../app.providers'
import { GitHubService } from '../services/git-hub.service';
import { GitHubServiceMock } from '../../mock-services/git-hub.service.mock';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainComponent,
        GitHubCardComponent,
        SearchUserComponent ],
      imports:[
        BrowserAnimationsModule,
        HttpClientModule,
        MATERIAL_COMPONENTS,
        FormsModule
      ],
      providers:[{
        provide:GitHubService,
        useClass:GitHubServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add tree elements to card array',() => {
    expect(component.gitHubDataList.length).toEqual(0);
    component.onSearchUser('UrbanoCeron');
    component.onSearchUser('UrbanoCeron');
    component.onSearchUser('UrbanoCeron');
    expect(component.gitHubDataList.length).toEqual(3);
  });
});
