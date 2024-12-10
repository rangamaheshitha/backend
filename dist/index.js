"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createApp_1 = require("./createApp");
const app = (0, createApp_1.createApp)();
const port = 3001;
app.listen(port, () => {
    console.log(`running on port ${port}`);
});
