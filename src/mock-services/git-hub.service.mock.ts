import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { GitHubModel } from '../app/model/git-hub-model'

const _getUsersUrl = 'https://api.github.com/users';
@Injectable()
export class GitHubServiceMock{
    
    constructor(private _httpCliente: HttpClient){
        
    }

    getUserInfo(userName:string){
        let githubObj = new GitHubModel();
            githubObj.avatar_url = '';
            githubObj.name = userName;
            githubObj.followers = 5;
            githubObj.following = 5;
            githubObj.login = 'UrbanRude';
    
        return Observable.of(githubObj);
    }

    handleError(error:any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() || 'Server error');
        
    }
}