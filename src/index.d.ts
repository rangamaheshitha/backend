import express = require("express");




declare global {
    namespace Express {

       export interface Request{
            customField?: string;
        }}}

