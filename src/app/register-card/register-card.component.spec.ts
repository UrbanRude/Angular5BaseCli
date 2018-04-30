import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterCardComponent } from './register-card.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MATERIAL_COMPONENTS } from '../app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
fdescribe('RegisterCardComponent', () => {
  let component: RegisterCardComponent;
  let fixture: ComponentFixture<RegisterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCardComponent ],
      imports:[
        FormsModule,
        MATERIAL_COMPONENTS,
        BrowserModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.validar = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should user',() => {
    let user = "Urbano";
    let result = component.valUser(user);
    expect(true).toEqual(true);
  });

  it('should user min ',() => {
    let user = "Urbo";
    let result = component.valUser(user);
    expect(false).toEqual(result);
  });

  it('should user max ',() => {
    let user = "UUrbaaaaaNNNNoOO";
    let result = component.valUser(user);
    expect(false).toEqual(result);
  });

  it('should badPassword',() => {
    let userPass = "13Cero!";
    let userPassII = "13Cero!";
    let result = component.valPassword(userPass,userPassII);
    expect(false).toEqual(result);
  });

  it('should validate Email',() => {
    let userEmail = "urbano@gmail.com";
    let result = component.validarEmail(userEmail);
    expect(true).toEqual(result);
  });

  it('should validate badEmail',() => {
    let userEmail = "urb@ano@gmail.com";
    let result = component.validarEmail(userEmail);
    expect(false).toEqual(result);
  });

  it('should validate function of check',() => {
    let compiled = fixture.nativeElement;
    let result = compiled.querySelector('#check'); 
    expect(result.check).toBeFalsy();
    result.click();
    fixture.detectChanges();
    expect(result.checked).toBeTruthy();
  });

  it('shoul validate name of user',() => {
    let userName = "Urbano";
    let result = component.valUserName(userName);
    expect(result).toBeTruthy();
  });

  it('shoul validate bad name of user',() => {
    let userName = "Urbano17/";
    let result = component.valUserName(userName);
    expect(result).toBeFalsy();
  });

  it('should validate registrer for user',() => {
    let user = "Urbano";
    let userPass = "Qwe123";
    let userPassII = "Qwe123";
    let userEmail = "axity@axity.com";
    let userName = "Tester";
    let result = component.validateRegister(user,userPass,userPassII,userEmail,userName);
    let compiled = fixture.nativeElement;
    let resultHTML = compiled.querySelector('#check'); 
    resultHTML.click();
    fixture.detectChanges();
    expect(resultHTML.checked).toBeTruthy();
    expect(result).toBeTruthy();
  });

  it('should validate bad registrer for user',() => {
    let user = "Urb";
    let userPass = "Qwe123";
    let userPassII = "Qwe12s3";
    let userEmail = "axity@axity.com";
    let userName = "Tester123";
    let result = component.validateRegister(user,userPass,userPassII,userEmail,userName);
    let compiled = fixture.nativeElement;
    let resultHTML = compiled.querySelector('#check'); 
    expect(resultHTML.check).toBeFalsy();
    resultHTML.click();
    fixture.detectChanges();
    expect(resultHTML.checked).toBeTruthy();
    expect(result).toBeFalsy;
  });

});
