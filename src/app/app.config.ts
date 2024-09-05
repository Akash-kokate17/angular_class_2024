import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './interceptor/logger.interceptor';
import { authInterceptor } from './interceptor/auth.interceptor';
import { retryInterceptor } from './interceptor/retry.interceptor';
import { errorInterceptor } from './interceptor/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient() ,// withInterceptors([loggerInterceptor,authInterceptor,retryInterceptor,errorInterceptor])
  ],
};
