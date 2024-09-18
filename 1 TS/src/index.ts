/*
let numOne = 5;

let myName: string = "Ayxan"; // bir type vermek

let numName: string | number = "Ayxan"; // iki type vermek

function change() {
  numName = "Mike";
  numName = 22;
}

//Noqte qoyulanda sadece iki type'a da aid olan metodlari gosterir
function check() {
  // sadece number'a aid olan metodlar
  if (typeof numName === "number") {
    numName.toFixed();
  }
  // sadece stringe aid olan metodlar
  if (typeof numName === "string") {
    numName.toUpperCase();
  }
}

let anyT: any = 25; // js'deki kimi type desteyi olmur

function checkAny() {
  //instanceof ancaq any olduqda istifade edile bilir
  if (anyT instanceof HTMLInputElement) {
    anyT.value;
  }
  if (typeof anyT === "number") {
    anyT.toFixed();
  }
}

//Union Types
let a: string = "sa";
let b: number = 25;
let c: boolean = true;
let d: undefined = undefined;
let e: symbol = Symbol();

//Object
const Person: {
  name: string;
  surName: "Mustafayev" | "Mustafazade" | "Mustafali"; // sadece bu sozlerden birine beraber ola biler
  age: string | number;
} = {
  name: "Ayxan",
  surName: "Mustafayev",
  age: 22,
};

let ab: "Ayxan" | "Mike" = "Ayxan";
let ba: 20 | 22 = 20;

// as
const Person2 = {
  name: "Ayxan" as string,
  surName: "Mustafayev" as "Mustafayev" | "Mustafazade" | "Mustafali",
  age: 22 as string | number,
};

//const input = document.querySelector("#value") as HTMLInputElement;

let aa: any = 5;
const cc = aa as number;

// array
const arr: number[] = [];
const arr1 = [] as number[];

const arr2: (string | number)[] = []; //hem string hem number arr
const arr3: string[] | number[] = []; // ya string yada number arr

const arr4: Array<string | number> = []; // generic type
const arr5 = [] as Array<string | number>;

let abb: number | undefined;
if (abb) {
  abb.toFixed();
}

const myArr: [string, string, number] = ["Ayxan", "Mustafayev", 22]; // tuples
const [fName, surname, age] = myArr; //destruct

//#3 function
function F() {
  return 25;
}

const fc = F(); //fc type: number

function C(): number {
  return 25;
}
function D(): [string, number] {
  //tuple
  return ["sds", 22];
}

function LogPerson(name: string, surname: string, age: number) {
  //param type
  console.log({ name, surname, age });
}
LogPerson("Ayxan", "Mustafayev", 22);

//promise
function LogPerson2(
  name: string,
  surname: string,
  age: number
): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(25);
  });
}

function LogPerson3(params: { name: string; surname: string; age: number }) {}
LogPerson3({
  name: "Ayxan",
  surname: "Mustafayev",
  age: 22,
});

//Home Task
function printName(name: string, count: number): void {
  while (0 < count--) {
    console.log(name);
  }
}

printName("Ayxan", 3);

//#4 Type Aliasing
//Obj
type Person = {
  name?: string; // eger "?" isaresi varsa yazmasaqda olar
  surname: string;
  age: number;
  situation: string;
};
type Animal = {
  gender: string; // eger "?" isaresi varsa yazmasaqda olar
  age: number;
  type: string;
};

type AnimalPerson = Animal & Person; // iki type birlesir

const anmlPer: AnimalPerson = {
  surname: "Black",
  age: 22,
  situation: "work",
  gender: "male",
  type: "golden",
};
const anmlPer2 = {} as AnimalPerson;
const anmlPer3 = <AnimalPerson>{};

const obj: Person = {
  surname: "Mustafayev",
  age: 22,
  situation: "work",
};

type Colors = "red" | "green" | "blue";
type CustomColors = "magenta" | "cyan" | "turqoise";
type AllColors = Colors | CustomColors;

const myColor: Colors = "blue";

const colorArr: Colors[] = ["blue", "green"];
const colorArr1: (Colors | CustomColors)[] | AllColors[] = [
  "blue",
  "green",
  "magenta",
];

const colorArr2: Array<Colors> = [];

//Map
type TypeMap = Map<string, number>;
//const myMap = new Map<string, number>();
const myMap: TypeMap = new Map();
myMap.set("age", 22);

//#5 Modules
//import * as fs from "fs";  "allowSyntheticDefaultImports": true -> deyilse
import fs from "fs";

//Default olaraq export etdiyimiz datani birbasa yazdiqimiz istenilen soze menimsede bilirik
//Sadece export etdiyimiz datani ise {} daxilinde sadece oz adina menimsede bilirik
import Human, { Student } from "./person";
Human.name;

const asa: Student = {
  class: 22,
  name: "Ayxan",
};

//import type {Student} from "./person" sadece type export etmek

//#6 Object Typing
type MyObject = {
  name?: string;
  age?: number;
  [key: string | number]: any; // dinamik key ve value add etile bilsin deye
};
const myObject: MyObject = {
  age: 22,
  name: "Ayxan",
  some: false, // dinamik komeyi ile
};

// partial islederek hamisini "?" isaresi qoyulmus kimi opsionel ede bilirik
type MyObject1 = Partial<{
  name: string;
  age: number;
}>;

//Record
const myObjectR: Record<string, boolean | number> = {
  key: true,
};

//Arrow func Type
const myFunc1 = (id: string, pass: string): boolean => {
  return true;
};

type FuncReturnBool = (id: string, password: string) => boolean;
const myFunc: FuncReturnBool = (id, pass) => {
  return true;
};

//#7 Interface
import { Request, Response, Handler } from "express";
//import { IncomingMessage } from "node:http"; //Request daha genis versiyasidir
const handler: Handler = (req, res, next) => {};

//Interface Obj
interface IObj {
  name: string;
  surname: string;
  [key: string]: any;
}

const ayxan: IObj = {
  name: "Ayxan",
  surname: "Mustafayev",
};
const namee: IObj["name"] = "Ayxan"; //xusisi bir parametrin type'ini goturmek

//Interface Arr
interface IArray {
  [index: number]: string | number;
}

const array: IArray = ["Ayxan", 23];

//Interface Func
interface IFunc {
  (name: string, count: number): void;
}

const myFunnc: IFunc = (name, count) => {};

//Interface Extend
interface IAnoutherFunction extends IFunc {
  (age: number, count: boolean): void;
}

interface MongoResponse {
  _id: string;
  created: string;
  updateAt: string;
}

interface BooksResponse extends MongoResponse {
  name: string;
  date: Date;
}

function getBooks(): BooksResponse {
  return {
    _id: "23",
    created: "today",
    updateAt: "None",
    name: "Dune",
    date: new Date(),
  };
}

//Interface Class
interface IStudent {
  name: string;
  surname: string;
  class: number;
  getStudentInfo: () => {
    name: IStudent["name"];
    surname: IStudent["surname"];
    class: IStudent["class"];
  };
  getStudentInfo2(): {
    name: IStudent["name"];
    surname: IStudent["surname"];
    class: IStudent["class"];
  };
}
const objj: IStudent = {
  name: "string",
  surname: "string",
  class: 2,
  getStudentInfo() {
    return {
      name: this.name,
      surname: this.surname,
      class: this.class,
    };
  },
  getStudentInfo2() {
    return {
      name: this.name,
      surname: this.surname,
      class: this.class,
    };
  },
};

//not
const obbjj = {
  getFunc(): string {
    return "n";
  },
  getFunc2: (): string => {
    return "n";
  },
  getFunc1() {
    return "n";
  },
  getFunc12: () => {
    return "n";
  },
};

//#8 Class
import { StdntClass, StudentClass } from "./Student";

const student = new StudentClass("Murad");
const stStudent = new StdntClass("Ayxan", "Mustafayev");

//#9 Utility Types
interface Pperson {
  age: number;
  surname: string;
  name: string;
}

//Omit => istediyimizi ixtisar ede bilirik
const Insan: Omit<Pperson, "age" | "name"> = {
  surname: "Mustafayev",
};

//Pick => istediyimizi sece bilirik
const pickPerson: Pick<Pperson, "age"> = {
  age: 22,
};

//Parameters => nece import edeceyimizi bilmediyimiz typelari tapmaq ucun
function yazdir(asdas: { country: string; gender: string }) {}

type AsdasType = Parameters<typeof yazdir>["0"];

const yazPar: AsdasType = {
  country: "Azerbaijan",
  gender: "Male",
};

//Patrial => yazmaq mecburi olmur
interface ParPerson {
  age: number;
  surname: string;
  name: string;
}
const parPperson: Partial<ParPerson> = {};

//Required => yazmaq mecburi olur
interface ReqPerson {
  age?: number;
  surname?: string;
  name?: string;
}
const reqPerson: Required<ReqPerson> = {
  name: "Ayxan",
  surname: "Mustafayev",
  age: 22,
};

//Readonly => sadece oxumaqa icaze verir, deyismeye icaze vermirf
const readPerson: Readonly<ReqPerson> = {
  name: "Ayxan",
  surname: "Mustafayev",
};
//readPerson.name = "Murad"; deyismeye icaze vermir

//Exclude => tipleri ixtisar edir
type ExType = Exclude<string | number | boolean, number>; //bu tipler arasindan, bu tipi ixtisar ele
const exVal: ExType = "33";

//ReturnType => return olunan type'i goturur
function returnNumber() {
  return 25;
}

const retVal: ReturnType<typeof returnNumber> = 22;

//#10 Enum
/*before Enum
const Notif = {
    Success: 0, //"Success" kimi stringlerde, beraberlesdirile biler
    Error: 1,
    Warning: 2,
    Information: 3,
};

function sendNotif(notifType: keyof typeof Notif) {
  const selectedNotif = Notif[notifType];
  switch (selectedNotif) {
    case Notif.Success:
      console.log("Success");
      break;
    case Notif.Error:
      console.error("Error");
      break;
    case Notif.Warning:
      console.warn("Warning");
      break;
    case Notif.Information:
      console.info("Information");
      break;
    default:
      break;
  }
}
sendNotif("Error");*/

//import chalk from 'chalk' //consule colors
//console.log(chalk.green("Success"));
/* *****************************************************************************
const Notif1 = {
  Success: Symbol(), //daha safe usul=> symbol: her defe individual olacaq 
  Error: Symbol(),
  Warning: Symbol(),
  Information: Symbol(),
};
function sendNotif1(notifType: symbol) {
  switch (notifType) {
    case Notif1.Success:
      console.log("Success");
      break;
    case Notif1.Error:
      console.error("Error");
      break;
    case Notif1.Warning:
      console.warn("Warning");
      break;
    case Notif1.Information:
      console.info("Information");
      break;
    default:
      break;
  }
}
//After Enum
enum Notif {
  Success,
  Error,
  Warning,
  Information,
}

function sendNotif(notifType: Notif) {
  switch (notifType) {
    case Notif.Success:
      console.log("Success");
      break;
    case Notif.Error:
      console.error("Error");
      break;
    case Notif.Warning:
      console.warn("Warning");
      break;
    case Notif.Information:
      console.info("Information");
      break;
    default:
      break;
  }
}
sendNotif(Notif.Warning);

//Notif.Error = 3 //read-only oldugu ucun deyismek olmur
/*enum Notiff { 
  Success = 22, //default 0'dan baslayir, deyismek olur, sonrakilar artan sira ile
  Error,        //string'e de beraber etmek olur
  Warning,
  Information,
}*/
/*
//#12 API example
import express  from "express";
import { addTodo} from "./addTodo";
import { getTodos } from "./getTodos";
import { deleteTodo } from "./deleteTodo";
import { toggleTodo } from "./toggleTodo";

const app = express()
app.use(express.json())

app.post("/add", addTodo)
app.get("/todos", getTodos)
app.delete("/deleteTodo/:id", deleteTodo)
app.post("/toggleTodo/:id", toggleTodo)

app.listen(4000,()=>{
  console.log("Server is up on http://localhost:4000")
})
*/

//#13 Browser
const body = document.querySelector("body");
console.log(body);

window.addEventListener("click", (e) => {
  const { target } = e;
  if (target instanceof Window) {
    console.log(target.location.href);
  }
});

import {defaults} from "./defaults.js" //.js qoyulmalidi

const button = document.querySelector<HTMLButtonElement>(defaults.buttonSelector);
if (button) {
  button.addEventListener("click", (e) => {
    if (e.currentTarget instanceof HTMLButtonElement) {
      console.log(e.currentTarget);
    }
  });
}
