//import {default as _job} from "./job";
import _job from "./job";
export const job = _job;

// import ve export bir setirde
export {default as jobs} from './job' 

export {default as Person, Student} from './person'
export * from './person' //bu formada default olani goturmek olmur
