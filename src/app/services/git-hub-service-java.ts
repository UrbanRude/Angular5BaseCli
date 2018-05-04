import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { GitHubModel } from '../model/git-hub-model'
import { GitHubLogin } from "../model/git-hub-formulario";

const _getUsersUrl = 'http://localhost:7001/scheduler-web/resources/catalog/userGit';
const _getAltaUSer = "http://localhost:7001/scheduler-web/resources/catalog/alta";
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class GitHubServiceJava{
    
   

    constructor(private _httpCliente: HttpClient){
        
    }

    getAddUser(user:GitHubLogin):Observable<any>{
        return this._httpCliente.post(_getAltaUSer,user,httpOptions);
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

    handleError(error:any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() || 'Server error');
        
    }
}