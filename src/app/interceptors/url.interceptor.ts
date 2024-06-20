import { HttpInterceptorFn } from '@angular/common/http';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl: string = 'https://icherniakov.ru/yt-course';

  return next(
    req.clone({
      url: baseUrl + req.url,
    })
  );
};
