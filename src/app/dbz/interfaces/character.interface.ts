

export interface Character {

//una vez que cargamos los indices uuid podemos poner la variable id. Hay que ponerla en opcional para que no rompa nuestro código. Hemos creado ya mucho sin id y ponerlo ahora nos dará errores
    id?: string;
    name:string;
    power:number;

}
