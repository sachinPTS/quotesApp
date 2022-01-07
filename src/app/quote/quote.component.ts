import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
@Input() quote;
@Output() sendDataEvent =new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.quote)
  }
  sendData(){
  
    this.sendDataEvent.emit(this.quote);
  }

}
