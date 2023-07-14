import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './services/player.service';
import { GameComponent } from './components/game/game.component';



@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PlayerService
  ]
})
export class CoreModule { }
