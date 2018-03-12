import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CopieListPage } from './copie-list';

@NgModule({
  declarations: [
    CopieListPage,
  ],
  imports: [
    IonicPageModule.forChild(CopieListPage),
  ],
})
export class CopieListPageModule {}
