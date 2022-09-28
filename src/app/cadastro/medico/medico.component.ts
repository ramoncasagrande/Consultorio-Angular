import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/service/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  public dados:any;

  public field_form = '';

  constructor(
    public medico_service: MedicoService
  ) { }

  ngOnInit(): void {
    this.novo();
  }

  novo(){
    this.dados = {
      id:0,
      nome:'',
      telefone: 0,
      crm:'',
      especialidade: 0
    }
  }

  salvar(){
    if (this.dados.nome == ''){
      this.field_form = 'field-error';
      return;
    }
    this.field_form = '';
    this.medico_service.salvar(this.dados).subscribe(
      (response:any) => {
        this.dados.id = response;
      }
    );
  }

}
