//#25
//2 Declaration Merging
declare module "vue-router" {
  interface IMev {
    id: string;
  }
  export interface RouteMeta {
    requiresAuth?: boolean;
  }
}

//#26
//1 Global Variable
declare global {
  var bruhmomentos = () => "bruhmomentos";
}

export {};
