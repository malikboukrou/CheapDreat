import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDealPage } from './list-deal';

@NgModule({
  declarations: [
    ListDealPage
  ],
  imports: [
    IonicPageModule.forChild(ListDealPage),
  ],
})
export class ListDealModule {}
