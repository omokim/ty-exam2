import {omit} from 'lodash'
import zod from 'zod'

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


export function dummy2(){
  console.log('ty-exam2 function')
}
export function dummy3(){
  console.log('ty-exam2 dummy3')
}

export function dummy4(){
  console.log('ty-exam2 dummy3')

  const bb = omit({aa:'a'}, ['bb'])
  console.log('---', bb)

  const aa = zod.number()
  const result = aa.safeParse(1)
  console.log('result-', result)


}
dummy4()
console.log("--------------")