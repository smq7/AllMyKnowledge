// Безопасное целое число это такое число, которое:

// может быть точно представлено числом IEEE-754 двойной точности и
// чьё представление IEEE-754 не может быть результатом округления любого другого целого числа, соответствующего представлению IEEE-754.
Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger('3');                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true