import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

const boootStrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  if (Object.prototype.hasOwnProperty.call(module, 'hot')) {
    hmrBootstrap(module, boootStrap)
  } else {
    console.error('请在ng serve 命令后添加 --hmr 参数')
  }
} else {
  boootStrap().catch(err => console.error(err));
}