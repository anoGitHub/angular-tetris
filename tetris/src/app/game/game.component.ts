import {Component, Output, EventEmitter, Input} from '@angular/core';

export interface historyList {
  timeStamp: number;
  gameEvent: string
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent {

  @Output() logOff = new EventEmitter();

  @Input() userName: string = '';
  @Input() userEmail: string = '';

  public historyList: Array<historyList> = []; 
  public actionCategories: Array<string> = []; 

  public gameEvent!: string;

  public points: number = 0;
  public timePlayed: number = 0;
  public timeDisplayed: number = 0; 
  public timeStamp: number = 0;

  public gameState: string = 'Press play'; 
  public playing: boolean = false; 


  public selectedOption: string = 'All'; 

  public selectCategories(){
    this.actionCategories = this.historyList.map((product) => product.gameEvent)
    this.actionCategories = [...new Set(this.actionCategories)];
    this.actionCategories.unshift('All'); 
  }

  public categoryEventChange($event: Event){
    this.selectedOption = ($event.target as HTMLOptionElement).value;
  }

  public clearList(){
    this.historyList=[];
    this.actionCategories=[];
    this.timePlayed=0;
    this.timeDisplayed=0;
    this.points = 0;
  } 

  public backToTheStart(){
    this.logOff.emit()
  }

  public addEventToHistoryList = (gameEvent: string) => {			
    const addedEvent = {timeStamp: Date.now(), gameEvent: gameEvent};
    this.historyList.push(addedEvent);
    this.selectCategories();
  }

  public onLineCleared(){
    this.points = this.points + 1;
    this.addEventToHistoryList('Line cleared')
  }

  public gameStates(value: string){
    this.gameState = value;

    if (value === 'Playing' && this.timePlayed < 1){
      this.addEventToHistoryList('Start')
    };
    if (value === 'Paused'){
      this.addEventToHistoryList('Pause')
    };
    if (value === 'Playing' && this.timePlayed > 0){
      this.addEventToHistoryList('Resume')
    };
  }

  public startTimer(){
    if (this.gameState === 'Playing'){	
    const time = setInterval(() => {					
      this.timePlayed++;
        if (this.gameState === 'Press play' || this.gameState === 'Paused'|| this.gameState === 'Game over'){
          clearInterval(time);
          }
        }, 100);
      }
    }

  public onGameOver(){
    this.gameStates('Game over');
    this.addEventToHistoryList('Game over')
    } 

}