import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ListaItem } from '../../models/lista.-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem = '';

  constructor( private deseosService: DeseosService,
                private router: ActivatedRoute ) { 
  
    const listaId = this.router.snapshot.paramMap.get('listaId');
    
    this.lista = this.deseosService.obtenerLista(listaId);

  }

  ngOnInit() {
  }

  agregarItem() {
    if ( this.nombreItem.length === 0 ) {
      return;
    }
    
    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );

    this.nombreItem = '';

    this.deseosService.guardarStorage();
  }


}
