function doubleEvenNumbers(numbers: number[]): number[] {
    const doubledNumbers: number[] = [];
    
    for (const number of numbers) {
      if (isEven(number)) {
        doubledNumbers.push(doubleNumber(number));
      }
    }
    
    return doubledNumbers;
  }
  
  function isEven(number: number): boolean {
    return number % 2 === 0;
  }
  
  function doubleNumber(number: number): number {
    return number * 2;
  }