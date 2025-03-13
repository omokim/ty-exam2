"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummy3 = exports.dummy2 = exports.dummy = exports.Greeter = void 0;
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
console.log("--------------");
