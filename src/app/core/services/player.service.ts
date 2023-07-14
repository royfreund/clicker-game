import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  private money: number;
  private clickMult: number;

  constructor() { 
    this.money = 0;
    this.clickMult = 1;
  }

  public addMoney() {
    this.money += this.clickMult;
  }

  private removeMoney(moneyToRemove: number) {
    this.money -= moneyToRemove;
  }

  public upgradeClickMult(moneyToRemove: number) {
    if (this.money > moneyToRemove) {
      this.clickMult *= 2;
      this.removeMoney(moneyToRemove);
    }
  }
}
