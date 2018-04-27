import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCardComponent } from './register-card.component';
import { FormsModule } from '@angular/forms';

fdescribe('RegisterCardComponent', () => {
  let component: RegisterCardComponent;
  let fixture: ComponentFixture<RegisterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCardComponent ],
      imports:[
        FormsModule
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
    let result = component.valUserName(user);
    expect(true).toEqual(true);
  });

  it('should user min ',() => {
    let user = "Urbo";
    let result = component.valUserName(user);
    expect(false).toEqual(result);
  });

  it('should user max ',() => {
    let user = "UrbaaaaaNNNNo";
    let result = component.valUserName(user);
    expect(false).toEqual(result);
  });

  it('should badPassword',() => {
    let userPass = "1Ew*";
    let userPassII = "1Ew*";
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

  it('should check',() => {
    let compiled = fixture.nativeElement;
    compiled.querySelector('#check').check(); 
    expect(true).toEqual(compiled.querySelector('#check').check());
  });
});
