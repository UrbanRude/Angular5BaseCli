import { Component,OnInit,OnDestroy } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub.card.component.html',
    styleUrls: ['./git-hub.card.component.css']
})
export class GitHubCardComponent implements OnInit,OnDestroy{

    gitHubData:GitHubModel;
    
    constructor(){
        this.gitHubData = new GitHubModel();
        this.gitHubData.avatar_url = 'http://www.etnahitech.com/new/wp-content/uploads/2017/09/businessman-1.png';
        this.gitHubData.followers = 1;
        this.gitHubData.following = 1;
        this.gitHubData.login = 'UrbanRude';
        this.gitHubData.name = 'Urbano Ceron Santillan';
    }
    
    ngOnInit(){

    }

    ngOnDestroy(){

    }
}