import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {

  private checkbox:HTMLInputElement;
  user:string;
  userPass:string;
  userPassII:string;
  userEmail:string;
  userName:string;
  validar:string;

  constructor() { 
    
  }

  ngOnInit() {
  }

  clickRegister(){
    if(this.validateRegister(this.user,this.userPass,this.userPassII,this.userEmail,this.userName)){
      this.validar = "Ok";
      console.log(1);
    }else{
      this.validar = "No";
      console.log(2);
    }console.log(3);
  }

  validateRegister(user:string,pass:string,passII:string,email:string,name:string){
    return this.valUser(user) && 
            this.valPassword(pass,passII) && 
            this.validarEmail(email) &&
            this.valUserName(name); 
  }

  valUser(user:string):boolean{
    return user.length >= 5 && user.length <=15; 
  }

  valPassword(pass:string,passII:string){
    var expresion = /^[a-zA-Z0-9]+$/;
    return expresion.test(pass) && pass === passII;
  }

  validarEmail(email:string){
    const emailExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return emailExp.test(email);
  }

  valUserName(userName:string){
    let userNameExp = /^[a-zA-Z\s]*$/;
    let trim = userName.trim();
    return userNameExp.test(trim) && userName.length >= 5 && userName.length <= 15;
  }
}

