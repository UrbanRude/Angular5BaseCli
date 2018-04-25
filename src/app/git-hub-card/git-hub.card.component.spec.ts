import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {GitHubCardComponent} from "../git-hub-card/git-hub.card.component";
import { MATERIAL_COMPONENTS } from '../app.module';
import { APP_PROVIDERS } from '../app.providers'
import { GitHubModel } from "../model/git-hub-model";

describe('GitHubCardComponent', () => {
  let component: GitHubCardComponent;
  let fixture: ComponentFixture<GitHubCardComponent>;
  let gitHubData:GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GitHubCardComponent
      ],
      imports:[
        MATERIAL_COMPONENTS,
      ],
      providers:[
        APP_PROVIDERS
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    gitHubData = new GitHubModel();
    gitHubData.login = 'UrbanoCeron';
    gitHubData.avatar_url = 'https://avatars2.githubusercontent.com/u/17173581?v=4';
    gitHubData.name = 'Urbano Ceron Santillan';
    gitHubData.followers = 25;
    gitHubData.following = 25;

    fixture = TestBed.createComponent(GitHubCardComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate model',() => {
    component.gitHubData = gitHubData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should validate model in the view',() => {
    component.gitHubData = gitHubData;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.data-container #name').textContent)
      .toContain(`Nombre:${gitHubData.name}`);
  });

  
});
