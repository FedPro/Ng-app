import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler extends ErrorHandler {
  override handleError(error: any): void {
    console.log('[' + error + ']');

    var errorEvent = {
      path: ' path ',
      message: error.message ?? error.toString(),
      handler: 'GlobalErrorHandler',
      user: 'id of the user',
      time: new Date(),
      stack: error.stack,
    };
    console.log(errorEvent);
  }
}
