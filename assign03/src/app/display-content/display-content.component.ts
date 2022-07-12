import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.scss']
})
export class DisplayContentComponent {

  allowNewContent: boolean = false;
  contentList: Array<number> = [];
  clickCounter: number = 0;
  clickStatus: string = 'Alive';

  constructor(){
    setTimeout(() => {
      this.allowNewContent = true;
    }, 1000)
  }

  onClicking() {
    this.clickStatus = Math.random() > 0.5 ? 'Alive' : 'Dead';
    this.clickCounter += 1;
    this.contentList.push(this.clickCounter);
  }

  getClass(){
    return this.clickStatus === 'Dead' ? 'alert-danger' : 'alert-success';
  }

}
