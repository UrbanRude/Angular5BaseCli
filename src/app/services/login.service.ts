import {Inject, Injectable} from '@angular/core';
import { GitHubService } from './git-hub.service';
import { Observer } from 'rxjs';

@Injectable()
export class LoginService{
    constructor(){

    }

    valUser(userName:string,pass:string){
        return userName === 'Urbano' && pass === 'axity';
    }
}