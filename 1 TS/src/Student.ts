//#8 Class
export interface IStudent {
  name: string;
  surname: string;
  sinif: number;
  getStudentInfo(): {
    name: IStudent["name"];
    surname: IStudent["surname"];
    sinif: IStudent["sinif"];
  };
}
//Interface Implements Class
export class StdutClass implements IStudent {
  constructor(
    public name: string,
    public surname: string,
    public sinif: number
  ) {}
  getStudentInfo() {
    return {
      name: this.name,
      surname: this.surname,
      sinif: this.sinif,
    };
  }
}

export class StudentClass {
  private fname = "s"; // ts-ignore ile elde edile biler
  #pname: string = "s"; //real private

  static sname: string = "s"; //Student.sname => classa aid olur
  name: string; //default public

  constructor(name: string) {
    this.name = name;
  }

  public getPname(): void {
    console.log(this.#pname);
  }
}

export class StdntClass {
  constructor(public name: string, public surname: string) {} //birbasa fielt yaradib cunstructorda set edir
}
