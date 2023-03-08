import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModuloUmModule } from './modulo-um/modulo-um.module';
import { ModuloDoisModule } from './modulo-dois/modulo-dois.module';
import { ModuleTresModule } from './modulo-tres/modulo-tres.module';
import { ModuloQuatroModule } from './modulo-quatro/modulo-quatro.module';
import { DiretivaUmDirective } from './diretivas/diretiva-um.directive';
import { DiretivadoisDirective } from './diretivas/diretiva-dois.directive';
import { ServiceUmService } from './service/service-um.service';
import { ServiceDoisService } from './service/service-dois.service';
import { FiltroImpuroPipe } from './pipes/filtro-impuro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FiltroImpuroPipe
  ],
  imports: [
    BrowserModule,
    ModuloUmModule,
    ModuloDoisModule,
    ModuleTresModule,
    ModuloQuatroModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [ServiceUmService,
    ServiceDoisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
