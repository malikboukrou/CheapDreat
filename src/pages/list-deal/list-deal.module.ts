import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDealPage, PopoverPage } from './list-deal';

@NgModule({
  declarations: [
    ListDealPage,
    PopoverPage
  ],
  imports: [
    IonicPageModule.forChild(ListDealPage),
  ],
})
export class ListDealModule {}
