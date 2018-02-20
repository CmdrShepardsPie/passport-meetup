// Type definitions for passport-local 1.0.0
// Project: https://github.com/jaredhanson/passport-local
// Definitions by: Christopher Simpson <https://github.com/CmdrShepardsPie>
// Definitions: https://github.com/CmdrShepardsPie/passport-meetup
// TypeScript Version: 2.3

/// <reference types="passport"/>

import { Strategy as PassportStrategy } from 'passport-strategy';

type VerifyFunction = (token: string, tokenSecret: string, profile: IUserProfile, done: DoneFunction) => void;

type DoneFunction = (err: any, user: IUserProfile) => void;

interface IStrategyOptions {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;
    requestTokenURL?: string;
    accessTokenURL?: string;
    userAuthorizationURL?: string;
    sessionKey?: string;
}

interface IUserProfile {
    provider: string;
    id: string;
    displayName: string;
}

declare class Strategy extends PassportStrategy {
    public name: string;
    constructor(options: IStrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);
    public userProfile(token: string, tokenSecret: string, params: null | undefined, done: DoneFunction): void;
}
