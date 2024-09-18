/*
//#14 Generics
//1
function Returner<T>(param: T) {
  return param;
}
const c = Returner<string>("Hi, I am Aykhan");
const b = Returner("Hi, I am Aykhan" as string);

//2
function ReturnerEx<T extends string | boolean>(param: T) {
  return param;
}
const a = ReturnerEx("s");

//3 array array'i
function createHeader<T extends object | [string | any][]>(param: T) {
  const headers = new Headers();
  if (Array.isArray(param)) {
    headers.set(param[0][0], param[0][1]);
  }
}

createHeader([
  ["Content-Type", "aplication/json"],
  ["Content-Type", true],
]);

createHeader<{ "Content-Type": string }>({
  "Content-Type": "23",
});

//Fetch example
const url = "https://jsonplaceholder.typicode.com/todos/1";
const response = await fetch(url).then((res) => res.json());
console.log(response);

//custom fetch for type
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
async function customFetch<T extends object | any[]>(
  input: RequestInfo | URL,
  init?: RequestInit
) {
  const response = await fetch(input, init);
  return response.json() as T;
}

const response1 = await customFetch<Todo>(url);
console.log(response1.completed); //type verdiyimiz ucun birbasa parametrlere elimiz catir

const ts = useTimestamp(response1)
console.log(ts.createdAt)

//add date for obj
function useTimestamp<T extends object>(obj: T) {
  return {
    ...obj,
    createdAt: Date.now(),
  };
}

//#15 As Const
//1
let c0: string = "Hi";
let c1 = "Hi" as string;
let c2 = <string>"Hi";

//2 obj
interface Student {
  name: string;
  class: number;
}

//const myObj ={} as Student => bu cur yazilis duzgun deyil, bos olsada error vermir
//const myObj1 = <Student>{}
const myObj: Student = {
  class: 5,
  name: "Aykhan",
};

//3 Arr
const myArr: [number, string] = [22, "Aykhan"];

const myObject: {
  name: "Aykhan";
  age: 20;
  info: {
    email: "any@gmail.com";
  };
} = {
  name: "Aykhan",
  age: 20,
  info: {
    email: "any@gmail.com",
  },
};
//freeze => deyismez edir (const myArr1: readonly (string | number)[])
const myArr1 = Object.freeze([22, "Aykhan"]);
//const => deyismez edir (const myArr2: readonly [22, "Aykhan"])
const myArr2 = [22, "Aykhan"] as const;
const myArr3 = <const>[22, "Aykhan"];

//func use const
function isExisting<T extends any[] | readonly any[]>(
  array: T,
  child: any
): [boolean, number] {
  const index = array.findIndex((value) => value === child);
  if (index >= 0) {
    return [true, index];
  }
  return [false, index];
}

const [existing, index] = isExisting(myArr2, 22);

//#16 Conditional Types
//1
const c = null;
const a = c ? 5 : 10;
//2
type ToArray1<T> = T[];
type B1 = ToArray<number>;
//2.1
type ToArray<T> = T extends string | number | boolean ? T[] : never;
type B = ToArray<number>;
//3 class
class Robot {
  genId = "asdasdjkla$sdaskakldf";
}
class Human {
  arId = 32423422242;
}
type GetId<T> = T extends Human
  ? T["arId"]
  : T extends Robot
  ? T["genId"]
  : never; // multiple conditions
//type ID = GetId<Human>

function getId<T>(param: T): GetId<T> {
  if (param instanceof Human) {
    return <GetId<T>>param.arId;
  }
  if (param instanceof Robot) {
    return <GetId<T>>param.genId;
  }
  throw new Error("param is not supported instance");
}
const human = new Human();
const robot = new Robot();
const id = getId(robot);
//4
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

const myMessage = {
  message: "Hello",
};
type message = MessageOf<typeof myMessage>; //type string
myMessage.message = "Hi";

//as const
const myMessage1 = {
  message: "Hello",
} as const;
//myMessage1.message = "Hi" //deyismek olmur
type message1 = MessageOf<typeof myMessage1>; //type "Hello"
//import { Prop } from "vue";

//#17
//Infer
//1
function myFunc() {
  return 100;
}
type MyFuncReturnType = ReturnType<typeof myFunc>; //type MyFuncReturnType = number

//2
type ReturnT<T> = T extends (...args: unknown[]) => infer C ? C : never; //infer ancaq contition zamani isledilir
type myFuncR = ReturnT<typeof myFunc>;

//3
function myFunc1(a: number, b: string, c: boolean) {
  return 100;
}
type FirstParameterType<T extends (...args: any[]) => any> = T extends (
  firstArg: infer F,
  ...args: any[]
) => any
  ? F
  : never;
type myFuncFirtstParametr = FirstParameterType<typeof myFunc1>;

//#18 Type Predicate
// function main(arg:any){
//   if (typeof arg === "string") { //array olmadigi ucun bu usulu islede bilmirik
//   }
// }
//1
function main(arg: any) {
  if (Array.isArray(arg)) {
  }
}
//2 Custom
function main1(arg: any) {
  //is istifade edildiyi ucun istifade edeceyi argumente . qoyulduqda onun metodlari gorunur
  if (isArr(arg)) {
    arg.push();
  }
}

function isArr(arg: any): arg is any[] {
  if (arg instanceof Array) {
    return true;
  }
  return false;
}
//3
class Person {
  private id: string;
  constructor(public name: string, public surname: string) {
    this.id = Math.random().toString();
  }
}
function main2(arg: any) {
  //is istifade edildiyi ucun istifade edeceyi argumente . qoyulduqda onun metodlari gorunur
  if (arg instanceof Person) {
    arg.name;
  }
}
//#19
//Object Type Aliasing
//01
const myObject: { name: string } = {
  name: "Ayxan",
};
//02
interface IMyObj {
  name: string;
}
const myObj: IMyObj = {
  name: "Ayxan",
};

//1
const myObj1 = {
  name: "Ayxan",
  channel: "Vierone",
  age: 22,
};

FunctionIsify(myObj1).channel();

function FunctionIsify<T extends { [key: string]: any }>(obj: T) {
  type FunctionObject = {
    [K in keyof T]: () => T[K];
  };

  return obj as FunctionObject;
}
//2
enum MyEnum {
  Error,
  Warning,
  Info,
}

const Errors = makeEnum("SyntaxError", "SpeechError", "RuntimeError");
function makeEnum<T extends string>(...keys: T[]) {
  type CustomEnum = {
    [Key in T]: number;
  };
  const obj = Object.keys(keys).reduce((accumulator, currentNumber) => {
    return {
      ...accumulator,
      [keys[Number(currentNumber)]]: currentNumber,
    };
  }, {} as CustomEnum);
  return Object.freeze(obj);
}

//#20
//Get Array Type
//1
const myArr = [1, 2, 3, 4, 5, "A"];

function MyFunc<T>(arr: T[]) {}
MyFunc(myArr);

const myObj = {
  name: "Ayxan",
  age: 20,
};
function myFunc1<T, K = keyof T>(obj:T){}
myFunc1(myObj)

//2
const myArray =[1, 2, 3, 4, 5, "A"];
type MyType = typeof myArray[number] //type MyType = string | number

const myArrayConst =[1, 2, 3, 4, 5, "A"] as const;
type MyTypeconst = typeof myArrayConst[number] //type MyType = 1 | 2 | 3 | 4 | 5 | "A"

//#21
//0 Template String
const str = "Ayxan";
console.log(`Hi ${str}`);
//Template Literal Types
//1
const eventName0: `on${string}` = "onTest"; //on ile baslamalidi
const eventName: `on${"update" | "mount"}` = "onmount";
const eventName1: `on${Capitalize<"update" | "mount">}` = "onMount";
//2
const obj = {
  name: "Aykhan",
  surname: "Mustafayev",
};

type ListenerObject<T extends object> = {
  [Key in keyof T as `on${Capitalize<string & Key>}Update`]?: (
    newValue: T[Key]
  ) => void;
};

function listen<Obj extends object>(obj: Obj, listeners: ListenerObject<Obj>) {}

listen(obj, {
  onNameUpdate() {},
  onSurnameUpdate() {},
});

//#22
//This
//1
const myObj = {
  name: "Ayxan",
  surname: "Mustafayev",
};

function myFunc(this: typeof myObj, age: number) {
  console.log({
    name: this.name,
    surname: this.surname,
    age,
  });
}

myFunc.call(myObj, 20);
//arrow func this = window

//#23
//Abstract, Protected ve Override
class Point {
  constructor(public x: number, public y: number) {}
}
const point1 = new Point(10, 5);

//1)Abstract
abstract class Point1 {
  constructor(public x: number, public y: number) {}
}
//const point0 = new Point1(10, 5); //ancaq extend oldugu yerde isledile bilir
class Player extends Point1 {
  constructor(x: number, y: number) {
    super(x, y);
  }
}
const player1 = new Player(10, 10);

//2)Prodected
abstract class Point2 {
  constructor(private x: number, protected y: number) {}
}
class Player2 extends Point2 {
  constructor(x: number, y: number) {
    super(x, y);
    super.y;
    this.y;
    //this.x
    //super.x
  }
}
const player3 = new Player2(10, 10);
//(private) class xaricinde elcatanliqa mehdudiyyet getirir
//eyni zamanda (extend) oldugu class daxilindede
//ancaq (prodected) olduqda extend oldugu class daxilindede elcatan olur

//3)Private Constructor
class Point3 {
  private constructor(protected x: number, protected y: number) {}

  public static create(a: number, b: number) {
    const point = new Point3(a, b);
    return point;
  }
}
const point3 = Point3.create(10, 20);

//4)Override
class Point4 {
  public log(){
    console.log("Hi")
  }
}
class Player4 extends Point4 {
  public override log(){}
}

//#24
//Function Overloading
//unuse overloading
function logger<T extends string | number | symbol>(
  a: T
): T extends string
  ? Array<any>
  : T extends number
  ? Map<any, any>
  : WeakMap<any, any> {
  return a as any;
}
//using overloading
function logge(): void;
function logge(a: number): number[];
function logge(a: string): Map<string, unknown>;

function logge(a?: number | string) {
  if (a == null) return;

  if (typeof a == "number") return [] as number[];

  if (typeof a == "string") return new Map<string, unknown>();
}

//class overloading
class Logg {
  logg(): void;
  logg(a: number): number[];
  logg(a: string): Map<string, unknown>;

  logg(...args:any[]) {
    if (args[0] == null) return;

    if (typeof args[0] == "number") return [] as number[];

    if (typeof args[0] == "string") return new Map<string, unknown>();
  }
}*/

//#25
//1 Interface Merging
interface IStudent {
  name: string;
}
interface IStudent {
  surname: string;
}
const a: IStudent = {
  name: "Ayxan",
  surname: "Mustafayev",
};

//2 Declaration Merging
import { useRoute, IMev } from "vue-router";

const router = useRoute();
router.meta.requiresAuth;

//#26
//1 Global Variable
window.bruhmomentos = () => "bruhmomentos";

//#27
//1
interface IData {
  store: Record<string, number>;
}

const data: IData = {
  store: {
    age: 23,
  },
};

//data.store.  =>age'e elimiz catmir
//2 data1
interface IData1 {
  store: Record<string, number>;
}

const data1 = {
  store: {
    age: 23,
  },
} satisfies IData1;
data1.store.age;

