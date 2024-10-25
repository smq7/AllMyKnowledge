// The call() method of Function instances calls 
// this function with a given "this" value and arguments 
// provided individually.
// ми КРч міняємо зіс нашої функції на заданий нами
function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
  }
  
  const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
  };
  
  greet.call(obj); // cats typically sleep between 12 and 16 hours
  greet()