export declare enum Status {
    CONNECTING = 0,
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3,
    RECONNECT_ABORTED = 4,
}
export interface WebSocketConfig {
    initialTimeout: number;
    maxTimeout: number;
    reconnectIfNotNormalClose: boolean;
}
export declare enum WebSocketSendMode {
    Direct = 0,
    Promise = 1,
    Observable = 2,
}
export declare type BinaryType = "blob" | "arraybuffer";
export declare class WebsocketService {
    private url;
    private protocols;
    private config;
    private binaryType;
    constructor(url: string, protocols?: Array<string>, config?: WebSocketConfig, binaryType?: BinaryType);
}
