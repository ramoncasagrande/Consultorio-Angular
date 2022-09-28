import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtendenteService {

  public api:string = 'http://localhost:8080/atendente';

  constructor(
    public http:HttpClient
  ) { }

  salvar(dados:any){

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })
    };

    return this.http.post('http://localhost:8080/atendente', dados, httpOptions);
  }

  listar(){
    return this.http.get(this.api);
  }

}
