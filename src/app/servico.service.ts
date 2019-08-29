import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  public variavel;
  constructor() {
    this.variavel = 10;
  }
  public mudarValor(){
    this.variavel = 20;
  }
}
