import { Component, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor( public deseosService: DeseosService,
                private router: Router,
                private alertControler: AlertController ) {
    
  }
  
  async agregarLista() {
/*     this.router.navigateByUrl('/tabs/tab1/agregar');
 */ 
  const alert = await this.alertControler.create({
    cssClass: 'my-custom-class',
    header: 'Nueva Lista',
    inputs: [
      {
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log("Cancelar");
        }
      },
      {
        text: 'Crear',
        handler: (data) => {
          console.log(data);
          if (data.titulo.length === 0) {
            return;
          } 
            // Tengo que crear la lista
           const listaId = this.deseosService.crearLista(data.titulo);

           console.log(data);
           this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
        }
      }
    ]
  });
  
  alert.present();

}

}
