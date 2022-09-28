import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  public api:string = 'http://localhost:8080/medico';

  constructor(
    public http:HttpClient
  ) { }

  salvar(dados:any){

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })
    };

    return this.http.post('http://localhost:8080/medico', dados, httpOptions);
  }
  

}
