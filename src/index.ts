export interface Greeting {
  message: string;
}

export class Greeter {
  sayHello(name: string): Greeting {
    return { message: `Hello, ${name}!` };
  }
}

export function dummy(){
  console.log('ty-exam2 function')
}

console.log("--------------")