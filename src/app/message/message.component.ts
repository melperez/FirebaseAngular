import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() userAuth: string;
  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
