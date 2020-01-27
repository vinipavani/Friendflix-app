import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendflixHomePageRoutingModule } from './friendflix-home-routing.module';

import { FriendflixHomePage } from './friendflix-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendflixHomePageRoutingModule
  ],
  declarations: [FriendflixHomePage]
})
export class FriendflixHomePageModule {}
