import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigsPageRoutingModule } from './configs-routing.module';

import { ConfigsPage } from './configs.page';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    ConfigsPageRoutingModule,
  ],
  declarations: [ConfigsPage, EditorComponent],
})
export class ConfigsPageModule {}
