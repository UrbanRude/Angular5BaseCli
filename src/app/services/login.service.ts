import {Inject, Injectable} from '@angular/core';
import { GitHubService } from './git-hub.service';
import { Observer } from 'rxjs';

@Injectable()
export class LoginService{
    constructor(){

    }

    valUser(userName:string,pass:string){
        
        var expresion = /^[a-zA-Z0-9]*$/;
        if(expresion.test(userName) && expresion.test(pass)){
            return userName === 'Urbano' && pass === 'axity';
        }else{
            return false;
        }

    }
}