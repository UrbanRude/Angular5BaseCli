import {Inject, Injectable} from '@angular/core';

@Injectable()
export class LoginService{
    constructor(){

    }

    valUser(user:string,pass:string):boolean{
        if((user === null || pass === null) && (user.length >= 8 || pass.length >= 8)){
            return false;
        }else{ return user === 'Urbano' && pass==='axity'; }
        
    }
}