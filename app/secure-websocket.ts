import { Injectable } from '@angular/core';



export enum Status {
  CONNECTING,
  OPEN,
  CLOSING, 
  CLOSED,
  RECONNECT_ABORTED
}



@Injectable()
export class WebsocketService {

    
    constructor() { }

}