import { Lancamento } from './../core/model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LancamentoService {

    constructor(private http: Http) { }

  LancamentoUrl = 'http://localhost:5005/lancamento/';

  adicionar(lancamento: Lancamento): Promise<Lancamento> {
    console.log('JSON para enviar ao servidor: ', JSON.stringify(lancamento));
     const headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
      headers.append('Content-Type', 'application/json');

      return this.http.post(`${this.LancamentoUrl}`, JSON.stringify(lancamento), { headers })
        .toPromise()
        .then( response => response.json() );
  }

  listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.LancamentoUrl}`, { headers })
      .toPromise()
      .then(response => response.json());
  }
}
