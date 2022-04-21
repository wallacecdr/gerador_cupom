import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cupons: any = [];

  gerarCupom(nome: String, codigo: Number) {
    return {
      nome: nome,
      codigo: codigo
    }
  }

  gerarNCupons(quantidade: any) {
    let valorInicial = 10000;
    for(let i = 0; i < quantidade; i++) {
      this.cupons.push(this.gerarCupom('LinaLuna Estética Avançada', i + valorInicial))
    }
  }

  
}
