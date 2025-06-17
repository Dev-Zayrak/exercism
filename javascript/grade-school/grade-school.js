//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
 #roster;

 constructor() {
   this.#roster = {};
 }

 roster() {
   const result = {};
   for (const [grade, students] of Object.entries(this.#roster)) {
     result[grade] = [...students].sort();
   }
   return result;
 }

 add(student, grade) {
  for (const [grade, students] of Object.entries(this.#roster)) {
    if (students.find(name => name === student)){
      this.#roster[grade].splice(this.#roster[grade].findIndex(elem => elem === student), 1);
    }
  }
  this.#roster[grade] ? this.#roster[grade] = [...this.#roster[grade], student] : this.#roster[grade] = [student];
 }

 grade(number) {
   return this.#roster[number] ? [...this.#roster[number]].sort() : [];
 }
}
