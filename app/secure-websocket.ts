import { Injectable } from '@angular/core';



export enum Status {
  CONNECTING,
  OPEN,
  CLOSING, 
  CLOSED,
  RECONNECT_ABORTED
}

export interface WebSocketConfig {
    initialTimeout: number;
    maxTimeout: number;
    reconnectIfNotNormalClose: boolean;
}


export enum WebSocketSendMode {
    Direct, Promise, Observable
}

export type BinaryType = "blob" | "arraybuffer";

@Injectable()
export class WebsocketService {

    
    constructor(private url: string, private protocols?: Array<string>, private config?: WebSocketConfig, private binaryType?: BinaryType) { 

      let match = new RegExp('wss?:\/\/').test(url);
        if (!match) {
            throw new Error('Invalid url provided');
        }
        this.config = config || {initialTimeout: 500, maxTimeout: 300000, reconnectIfNotNormalClose: false};
        this.binaryType = binaryType || "blob";
        // this.dataStream = new Subject();
        // this.connect(true);

    }

}