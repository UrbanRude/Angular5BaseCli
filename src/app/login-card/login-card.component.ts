import {Component, OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-login-card',
    templateUrl:'./login-card.component.html',
    styleUrls:['login-card.component.css']
})

export class LoginComponentCard implements OnInit{
    
    private user:string;
    private ppass:string;
     
    constructor(private _loginService:LoginService,private _router:Router){

    }

    ngOnInit(): void {
    }

    sendLogin(){
        this._loginService.valUser(this.user,this.ppass) ? this._router.navigate(['']) : alert('User y/o incorrect');
    }
}