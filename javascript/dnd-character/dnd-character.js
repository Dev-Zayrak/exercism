//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (consti) => {
  if(consti < 3){
    throw new Error("Ability scores must be at least 3")
  }
  if(consti > 18){
    throw new Error("Ability scores can be at most 18")
  }
  return Math.floor((consti - 10) /2);
};

export class Character {

  constructor(){
    this.strengthNumber = Character.rollAbility();
    this.dexterityNumber = Character.rollAbility();
    this.constitutionNumber = Character.rollAbility();
    this.intelligenceNumber = Character.rollAbility();
    this.wisdomNumber = Character.rollAbility();
    this.charismaNumber = Character.rollAbility();
  }

  static rollAbility() {
    let numbers = Array.from({ length: 4 }, () => Math.ceil(Math.random() * 6));
    numbers = numbers.sort(function (a, b) {return a - b;});
    numbers.shift();
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  
  get strength() {
    return this.strengthNumber;
  }

  get dexterity() {
    return this.dexterityNumber;
  }

  get constitution() {
    return this.constitutionNumber;
  }

  get intelligence() {
    return this.intelligenceNumber;
  }

  get wisdom() {
    return this.wisdomNumber;
  }

  get charisma() {
    return this.charismaNumber;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitutionNumber);
  }
}
