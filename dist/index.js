"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummy5 = exports.dummy4 = exports.dummy3 = exports.dummy2 = exports.dummy = exports.Greeter = void 0;
const lodash_1 = require("lodash");
const zod_1 = __importDefault(require("zod"));
class Greeter {
    sayHello(name) {
        return { message: `Hello, ${name}!` };
    }
}
exports.Greeter = Greeter;
function dummy() {
    console.log('ty-exam2 function');
}
exports.dummy = dummy;
function dummy2() {
    console.log('ty-exam2 function');
}
exports.dummy2 = dummy2;
function dummy3() {
    console.log('ty-exam2 dummy3');
}
exports.dummy3 = dummy3;
function dummy4() {
    console.log('ty-exam2 dummy3');
    const bb = (0, lodash_1.omit)({ aa: 'a' }, ['bb']);
    console.log('---', bb);
    const aa = zod_1.default.number();
    const result = aa.safeParse(1);
    console.log('result-', result);
}
exports.dummy4 = dummy4;
function dummy5() {
    console.log('ty-exam2 dummy5');
}
exports.dummy5 = dummy5;
console.log("--------------");
