import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public debug: false;
  constructor() {}

  handleHttpError(errorResponse: any): Observable<any> {
    let errorMessage = '';
    if ( errorResponse.error)  {
      try {
        const json = JSON.parse(errorResponse.error);
        errorMessage = json['error'];
      } catch (err) {
        errorMessage = errorResponse.error;
      }
    } else {
      errorMessage = (errorResponse.message) ? errorResponse.message :
            errorResponse.status ? `${errorResponse.status} - ${errorResponse.statusText}` : 'Server error';
    }
    return observableThrowError(errorMessage);
  }

  extractErrorMsg(error: any): any {
    let errorMessage: {message: string, detailMessage: string} = null;

    if (error.status) {
      switch (error.status) {
        case 404:
          return {
            message: error.statusText,
            detailMessage: error.statusText
          };
        default:
          return {
            message: error.statusText,
            detailMessage: error.statusText
          };
      }
    }

    if (typeof error === 'string') {
      errorMessage = { message: '', detailMessage: error};
    } else {
      const body = error._body;
      if (typeof body === 'string') {
        try {
          errorMessage = JSON.parse(body);
        } catch (err) {
          errorMessage = {message: '', detailMessage: body};
        }
      } else if (body instanceof ProgressEvent ) {
        errorMessage = {
          message: 'Service is unreachable',
          detailMessage: 'service is unreachable',
        };
      } else {
        errorMessage = body;
      }

      if (!errorMessage) {
        errorMessage = error.status ? `${error.status} - ${error.statusText}` : error;
      }
    }

    if (!this.debug) {
      errorMessage.message = 'Please contact support';
    }
    return errorMessage;
  }
}
