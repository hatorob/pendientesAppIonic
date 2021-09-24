import { ListaItem } from './lista.-item.model';




export class Lista {

    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    /* El constructor se llama cuando creamos una instancia de la lista */
    constructor( titulo: string) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];

        this.id = new Date().getTime();

    }
}