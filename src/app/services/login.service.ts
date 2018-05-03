import {Inject, Injectable} from '@angular/core';
import { GitHubService } from './git-hub.service';
import { Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GitHubLogin } from '../model/git-hub-formulario';
import { IfObservable } from 'rxjs/observable/IfObservable';

const _getUsersUrl = 'http://localhost:7001/scheduler-web/resources/catalog/login';

@Injectable()
export class LoginService{
    constructor(private _httpCliente:HttpClient){

    }  

    valUser(userName:string,pass:string){
        
        var expresion = /^[a-zA-Z0-9]*$/;
        if(expresion.test(userName) && expresion.test(pass)){
            return userName === 'Urbano' && pass === 'axity';
        }

    }

    validateUSer(user:String,password:String){
        return this._httpCliente
        .get(`${_getUsersUrl}?user=${user}&pass=${password}`,{responseType:'json'})
        .map((x:any) => {
            let githubObj = new GitHubLogin();
            githubObj.userName = x.name;
            githubObj.validate = x.validate;
            return githubObj;
        })
        .catch(this.handleError);
    }

    handleError(error:any){
        console.log(`Error: ${error}`);
        return IfObservable.throw(error.json() || 'Server error');     
    }


}