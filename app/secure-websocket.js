"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
(function (Status) {
    Status[Status["CONNECTING"] = 0] = "CONNECTING";
    Status[Status["OPEN"] = 1] = "OPEN";
    Status[Status["CLOSING"] = 2] = "CLOSING";
    Status[Status["CLOSED"] = 3] = "CLOSED";
    Status[Status["RECONNECT_ABORTED"] = 4] = "RECONNECT_ABORTED";
})(exports.Status || (exports.Status = {}));
var Status = exports.Status;
(function (WebSocketSendMode) {
    WebSocketSendMode[WebSocketSendMode["Direct"] = 0] = "Direct";
    WebSocketSendMode[WebSocketSendMode["Promise"] = 1] = "Promise";
    WebSocketSendMode[WebSocketSendMode["Observable"] = 2] = "Observable";
})(exports.WebSocketSendMode || (exports.WebSocketSendMode = {}));
var WebSocketSendMode = exports.WebSocketSendMode;
var WebsocketService = (function () {
    function WebsocketService(url, protocols, config, binaryType) {
        this.url = url;
        this.protocols = protocols;
        this.config = config;
        this.binaryType = binaryType;
        var match = new RegExp('wss?:\/\/').test(url);
        if (!match) {
            throw new Error('Invalid url provided');
        }
        this.config = config || { initialTimeout: 500, maxTimeout: 300000, reconnectIfNotNormalClose: false };
        this.binaryType = binaryType || "blob";
        // this.dataStream = new Subject();
        // this.connect(true);
    }
    WebsocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String, Array, Object, String])
    ], WebsocketService);
    return WebsocketService;
}());
exports.WebsocketService = WebsocketService;
//# sourceMappingURL=secure-websocket.js.map