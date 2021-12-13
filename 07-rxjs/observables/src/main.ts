import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/05-subject/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
