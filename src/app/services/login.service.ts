import {Inject, Injectable} from '@angular/core';

@Injectable()
export class LoginService{
    constructor(){

    }

    valUser(user:string,pass:string):boolean{
        return user === 'Urbano' && pass==='axity';         
    }
}