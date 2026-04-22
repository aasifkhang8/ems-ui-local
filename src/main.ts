import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { routes } from './app/app-routing.module';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
providers: [
    provideHttpClient(), provideAnimationsAsync(),provideRouter(routes)
  ],
  // ngZoneEventCoalescing: true

})
  .catch(err => console.error(err));
  
