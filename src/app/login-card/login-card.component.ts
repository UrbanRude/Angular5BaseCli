import {Component, OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { GitHubService } from '../services/git-hub.service';
import { MainComponent } from '../main/main.component';

@Component({
    selector:'app-login-card',
    templateUrl:'./login-card.component.html',
    styleUrls:['login-card.component.css']
})

export class LoginComponentCard implements OnInit{
    
    user:string;
    ppass:string;
    valor:boolean;
    
    constructor(private _loginService:LoginService,
        public _router:Router,private _github:GitHubService){

    }

    ngOnInit(): void {
    }

    sendLogin(){
        this._loginService.validateUSer(this.user,this.ppass).
        subscribe(x => {
            x.validate ? this._router.navigate(['']) : alert('User y/o incorrecto'); 
        });
    }
}