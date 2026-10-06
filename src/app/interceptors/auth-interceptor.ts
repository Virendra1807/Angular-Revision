import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  console.log("Request in Interceptor");
  console.log("Modify request or add token in header");
  return next(req);
};
