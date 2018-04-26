import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent, routes } from '../app.component';
import { MATERIAL_COMPONENTS } from '../app.module';
import { APP_PROVIDERS } from '../app.providers'
import { LoginComponentCard } from './login-card.component';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import {GitHubCardComponent} from "../git-hub-card/git-hub.card.component";
import { SearchUserComponent } from '../search-user/search-user.component';
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { LoginComponent } from '../login/login.component';

fdescribe('LoginComponentCard', () => {
  let component: LoginComponentCard;
  let fixture: ComponentFixture<LoginComponentCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponentCard,
        MainComponent,
        AboutComponent,
        ContactComponent,
        GitHubCardComponent,
        SearchUserComponent,
        PasivoComponent,
        ReactivoComponent,
        LoginComponent,
      ],
      imports:[
        MATERIAL_COMPONENTS,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(routes)
      ],
      providers:[{        
        provide:APP_BASE_HREF,
        useValue:'/'
      },APP_PROVIDERS],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Login', () => {
    component.user = 'Urbano';
    component.ppass = 'axity';
    let navigateSpy = spyOn((component)._router, 'navigate');
    component.sendLogin();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('should BadLogin', () => {
    component.user = 'Urbeano';
    component.ppass = 'axityd';
    let compiled = fixture.nativeElement;
    let navigateSpy = spyOn(compiled, 'alert');
    component.sendLogin();
    expect(navigateSpy).toHaveBeenCalledWith('User y/o incorrect');
    /*let navigateSpy = spyOn(compiled,'alert');
    component.sendLogin();
    expect(navigateSpy).toHaveBeenCalledWith('User y/o incorrect');*/
  });

  it('should specials characters', () => {
    component.user = '-/()=//';
    component.ppass = 'axityd';
    component.sendLogin();
    expect(component.valor).toEqual(true);
  });

  it('should call sendLogin on view',() => {
    component.user = 'Urbano';
    component.ppass = 'axity';
    let navigateSpy = spyOn((component)._router, 'navigate');
    let compiled = fixture.nativeElement;
    compiled.querySelector('.button-login button').click();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

});
