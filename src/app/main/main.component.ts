import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  gitHubData:GitHubModel;
  gitHubDataList:Array<GitHubModel>;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private _gitHubService:GitHubService) {
      this.gitHubDataList = new Array<GitHubModel>();
  }

  ngOnInit() {
    
  }

  onSearchUser(userName:string){
    this._gitHubService
        .getUserInfo(userName)
        .subscribe(
          value => {
            this.gitHubDataList.push(value);
          },
          error => {
            console.log('Error')
          },
          () => {
            console.log('Complete');
          });
  }
  onDeleteClick(obj:GitHubModel){
    this.gitHubDataList = this.gitHubDataList.filter(x => x != obj);
  }
}
