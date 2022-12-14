import { Component, OnInit } from '@angular/core';
import { AtendenteService } from 'src/app/service/atendente.service';

@Component({
  selector: 'app-atendente',
  templateUrl: './atendente.component.html',
  styleUrls: ['./atendente.component.scss']
})
export class AtendenteComponent implements OnInit {

  public dados:any;

  public field_form = '';

  constructor(
    public atendente_service: AtendenteService
  ) { }

  ngOnInit(): void {
    this.novo();
  }

  salvar(){
    if (this.dados.nome == ''){
      this.field_form = 'field-error';
      return;
    }
    this.field_form = '';
    this.atendente_service.salvar(this.dados).subscribe(
      (response:any) => {
        this.dados.id = response;
      }
    );
  }

  novo(){
    this.dados = {
      id:0,
      nome:''
    }
  }


}
