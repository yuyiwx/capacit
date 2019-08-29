import { Component } from '@angular/core';
import { Router, RouterLink, Routes} from '@angular/router';
import {ServicoService} from'./servico.service';
import { Pag1Component } from './pag1/pag1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imejr';
  nomes;
  variavel = "Cab";
  numero = 1;
  teste;
  constructor(servico: ServicoService)
  {
    this.teste = servico;
    console.log(this.teste.variavel);
    this.teste.mudarValor();
    this.nomes=['Joaquim', 'Bob','Pedro'];
    this.funcao();
  }
  funcao()
  {
    this.numero = this.numero+1;
  }
}
