import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) {}

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse instanceof Response
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
            let errors;
            msg = 'Ocorreu um erro ao processar a sua solicitação';

            try {
              errors.json();

              msg = errors[0].mensagemUsuario;
              console.log('Msg de erro usuario', msg);
            } catch (e) {}

            console.error('Ocorreu um erro', errorResponse);
      } else {
        msg = 'Erro ao processaar serviço remoto. Tente novamente.';
        console.error('Ocorreu um erro', errorResponse);
      }

      this.toasty.error(msg);
  }
}
