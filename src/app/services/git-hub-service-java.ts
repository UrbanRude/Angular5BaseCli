import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { GitHubModel } from '../model/git-hub-model'
import { GitHubLogin } from "../model/git-hub-formulario";

const _getUsersUrl = 'http://localhost:7001/scheduler-web/resources/catalog/userGit';
const _getValidateUser = "http://localhost:7001/scheduler-web/resources/catalog/alta"
@Injectable()
export class GitHubServiceJava{
    
    constructor(private _httpCliente: HttpClient){
        
    }

    getUserInfo(userName:string){
        return this._httpCliente
            .get(`${_getUsersUrl}/${userName}`,{responseType:'json'})
            .map((x:any) => {
                let githubObj = new GitHubModel();
                githubObj.avatar_url = x.avatar_url;
                githubObj.name = x.name;
                githubObj.followers = x.followers;
                githubObj.following = x.following;
                githubObj.login = x.login
                return githubObj;
            })
            .catch(this.handleError);
    }

    validateUSer(user:String,password:String){
        return this._httpCliente
        .get(`${_getValidateUser}?user=${user}&pass=${password}`,{responseType:'json'})
        .map((x:any) => {
            let githubObj = new GitHubLogin();
            githubObj.validate = x.validate;
            return githubObj;
        })
        .catch(this.handleError);
    }

    handleError(error:any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() || 'Server error');
        
    }
}