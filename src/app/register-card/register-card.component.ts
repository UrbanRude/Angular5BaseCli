import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {

  user:string;
  userPass:string;
  userPassII:string;
  userEmail:string;
  userName:string;
  validar:string;

  constructor() { }

  ngOnInit() {
  }

  clickRegister(){
    if(this.valUserName(this.user) && 
        this.valPassword(this.userPass,this.userPassII) && 
        this.validarEmail(this.userEmail)){
      this.validar = "Ok";
    }else{
      this.validar = "No";
    }
  }

  valUserName(name:string):boolean{
    return name.length >= 5 && name.length <=15; 
  }

  valPassword(pass:string,passII:string){
    var expresion = /^[a-zA-Z0-9]*$/;
    return expresion.test(pass) && pass === passII;
  }

  validarEmail(email:string){
    const emailExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return emailExp.test(email);
  }

}
