import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valorInicial: any = 10000;
  cupons: any = [];

  gerarCupom(nome: String, codigo: Number) {
    return {
      nome: nome,
      codigo: codigo
    }
  }

  gerarNCupons(valorInicial: any, quantidade: any) {
    this.valorInicial= parseInt(valorInicial);

    for(let i = 0; i < quantidade; i++) {
      this.cupons.push(this.gerarCupom('LinaLuna Estética Avançada', i + this.valorInicial))
    }
  }
}
