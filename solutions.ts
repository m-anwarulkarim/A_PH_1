// ==========================================
// Problem 1: Filter Even Numbers
// Accepts an array of numbers and returns a new array containing only even numbers.
// ==========================================
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// ==========================================
// Problem 2: Reverse a String
// Takes a string as input and returns the reversed version of that string.
// ==========================================
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// ==========================================
// Problem 3: Type Guard with Union Type
// Defines a union type StringOrNumber and uses type guards
// to return "String" for string input or "Number" for number input.
// ==========================================
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
  if (typeof input === "string") {
    return "String";
  }
  return "Number";
}

// ==========================================
// Problem 4: Generic Function with Constraints
// Retrieves a property from an object while ensuring with keyof constraints
// that the key exists on the provided object.
// ==========================================
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// ==========================================
// Problem 5: Interface and Property Toggle
// Defines a Book interface and toggles or initializes the isRead property (default: true).
// ==========================================
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: book.isRead !== undefined ? !book.isRead : true,
  };
}

// ==========================================
// Problem 6: OOP Inheritance (Person & Student)
// Base class Person with name and age, extended by Student with grade and getDetails method.
// ==========================================
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// ==========================================
// Problem 7: Array Intersection
// Finds and returns only the elements that exist in both numeric arrays.
// ==========================================
function getIntersection(firstArray: number[], secondArray: number[]): number[] {
  const secondArraySet = new Set(secondArray);
  return firstArray.filter((item) => secondArraySet.has(item));
}
