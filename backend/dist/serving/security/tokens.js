"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const PasswordHash_1 = require("./PasswordHash");
const mongodb_1 = require("mongodb");
passport_1.default.serializeUser((user, done) => done(null, user));
passport_1.default.deserializeUser((user, done) => done(null, user));
passport_1.default.use(new passport_local_1.default.Strategy({ usernameField: "email", passwordField: "password" }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    const url = "mongodb://localhost:27017";
    const dbName = "Users";
    (function mongo() {
        return __awaiter(this, void 0, void 0, function* () {
            let client;
            try {
                client = yield mongodb_1.MongoClient.connect(url);
                const db = client.db(dbName);
                const col = db.collection("users");
                const user = yield col.findOne({ email });
                console.log();
                //console.log("meme ,", +password + " " + user.password);
                //let result = await comparePassword(password, user.password);
                //console.log("coal,", result);
                // if (!user) {
                // done(null, false, { message: "incorrect username" });
                // }
                if (user && PasswordHash_1.comparePassword(password, user.password)) {
                    //console.log("oooo", token);
                    done(null, user);
                }
                else {
                    done(null, false);
                }
                //return done(null, user);
            }
            catch (err) {
                console.log(err.stack);
            }
            // Close connection
            client === null || client === void 0 ? void 0 : client.close();
        });
    })();
})));
