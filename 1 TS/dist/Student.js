var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StudentClass_pname;
//Interface Implements Class
export class StdutClass {
    constructor(name, surname, sinif) {
        this.name = name;
        this.surname = surname;
        this.sinif = sinif;
    }
    getStudentInfo() {
        return {
            name: this.name,
            surname: this.surname,
            sinif: this.sinif,
        };
    }
}
export class StudentClass {
    constructor(name) {
        this.fname = "s"; // ts-ignore ile elde edile biler
        _StudentClass_pname.set(this, "s"); //real private
        this.name = name;
    }
    getPname() {
        console.log(__classPrivateFieldGet(this, _StudentClass_pname, "f"));
    }
}
_StudentClass_pname = new WeakMap();
StudentClass.sname = "s"; //Student.sname => classa aid olur
export class StdntClass {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    } //birbasa fielt yaradib cunstructorda set edir
}
