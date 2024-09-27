// IIFE - Immediately Invoked Function Expression

// > Seft- Invoking Function

// NỘI DUNG

/*
1. IIFE trông như thế nào

vd1 (function () {
  console.log("IIFE");
})();

2. Dùng dấu ; trước IIFE

const firstName = "Nguyen";
((firstName) => {
  console.log(firstName);
})(firstName);



3. IIFE là hàm "private";

let i = 0;

(function myFunc() {
  i++;
  console.log(i);
  if (i < 10) {
    myFunc();
  }
})();

4. Sử dụng IIFE khi nào;

sử dụng khi người dùng muốn đoạn mã chạy ngay tuy nhiên các bạn muốn đoạn mã ở trong đó biến và hàm nó không chui ra phạm vi golbal ảnh hưởng đến dự án 


5. Cách tạo IIFE
(function () {
  console.log("IIFE");
})();


6. ứng dụng IIFE cho một hàm


const app = (function () {
  const cars = [];
  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
})();
app.add("BMW");

app.get(1);


*/

/* END */

/* 
# SCOPE - Phạm vi 

- Các loại phạm vi

   - Global - Toàn cầu
   - Code block - Khối mã: let, const
   - Local scope - Hàm: var, function

- Khi gọi mỗi hàm luôn có một phạm vi mới được tạo
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
- Cách thức một biến được truy cập
- Khi nào một biến bị xóa khỏi bộ nhớ?
    - Biến toàn cầu?
    - Biến trong code block & hàm?
    - biến trong hàm được tham chiếu bởi 1 hàm?
*/

// function aa() {
//   let count = 0;
//   function bb() {
//     return count++;
//   }
//   return bb;
// }

// const cc = aa();

// console.log(cc()); // 0
// console.log(cc());
// console.log(cc());

// var fullName;

// function hello() {
//   var fullName;
// }

// function hellos() {
//   const fullNames = "bg";
//   function halo() {
//     console.log(fullNames);
//   }
//   halo();
// }

// hellos();

//bai 2
// let myName = function printName(name) {
//   console.log(name);
// };

// myName("Nguyen");

// // bai 3:

// function getGreeting(firstname, lastname) {
//   function innerGreeting() {
//     console.log(`Hello ${firstname} ${lastname}`);
//   }
//   return innerGreeting;
// }

// const greeting = getGreeting("Nguyen", "Tran");
// greeting();

// //bai 4

// function count() {
//   for (let i = 1; i <= 6; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// count();

// bài 5:

// function factory(operator) {
//   return function (num) {
//     if (operator === "square") {
//       return num * num;
//     } else if (operator === "squareRoot") {
//       return Math.sqrt(num);
//     } else {
//       return "Invalid operator";
//     }
//   };
// }

// const square = factory("square");
// console.log(square(2));
// const squareRoot = factory("squareRoot");
// console.log(squareRoot(9));

// function createPerson(name) {
//   // Biến để lưu trữ id tự động tăng
//   let idCounter = 1;

//   // Định nghĩa một object person
//   const person = {
//     id: idCounter++, // Gán giá trị id và tăng lên
//     name: name,

//     // Getter cho id
//     getId: function () {
//       return this.id;
//     },

//     // Setter cho id (nếu cần, bạn có thể bỏ qua nếu không cần thay đổi id)
//     setId: function (newId) {
//       this.id = newId;
//     },

//     // Getter cho name
//     getName: function () {
//       return this.name;
//     },

//     // Setter cho name
//     setName: function (newName) {
//       this.name = newName;
//     },
//   };

//   return person;
// }

// // Tạo các đối tượng person
// const person1 = createPerson("Alice");
// const person2 = createPerson("Bob");

// console.log(person1.getId()); // Output: 1
// console.log(person2.getId()); // Output: 2

// phần 2:

//1

// var name;
// function printName() {
//   var name;
//   name = "Nguyen";
//   console.log(name);
// }

// printName();

//2

// let name;

// function printName() {
//   let name = "Nguyen";
//   console.log(name);
// }

// printName();

//3

// const name = "Nguyen";

// function printName() {
//   const name = "Tran";
//   console.log(name);
// }

// printName();

// const numbers = [1, 2, 3];
// numbers.push(4);

// // Destructuring
// //1
// var date = [2020, 10, 10];
// const [year, month, day] = date;
// console.log(year, month, day);

// //2

// const person = {
//   firstName: "Nguyen",
//   lastName: "Son",
//   age: 20,
// };

// const { firstName, lastName, age } = person;
// console.log(firstName, lastName, age);

// phan 4

//1:

// const fullName = "Nguyen Hong Son";
// const age = 24;

// const string = `My name is ${fullName} and I'm ${age} years old.`;

// console.log(string);

//2

// let a = 2;
// let b = 20;

// console.log(`Tổng của ${a} + ${b} = ${a + b}`);

// // phần 5: operator

// //1

// const array1 = [2, 4, 6, 8, 10];
// const array2 = [...array1, 5, 6, 7, 8, 9];

// //2

// const array3 = [...array2];

// //3

// const cold = ["autumn", "winter"];
// const warm = ["spring", "summer"];
// const array4 = [...cold, ...warm];

// // phần 6: arrow function

// //b1
// const aa = (a) => a + 100;

// console.log(aa(100));
// //b2
// const bb = (a, b) => a + b + 100;

// const dd = (a, b) => a + b + 42;

// const bob = (a) => a + 100;

// function sum(a, b) {
//   return a + b;
// }
// function minus(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }

// const caculate = (a, b, operator) => {
//   return operator(a, b);
// };

// console.log(caculate(1, 2, sum));

// // phần 8: reduce

// // 1

// let numArray = [10, 20, 30];

// const total = numArray.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(total);

// phần 9: currying function

// function multiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// const multiply1 = multiply(2);
// const multiply2 = multiply1(3);
// const multiply3 = multiply2(4);

// console.log(multiply3);

// phần 10: parameters

// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(5, 3));

// console.log(multiply(5));

// function multiply(...rest) {
//   let result = 1;
//   for (let i = 0; i < rest.length; i++) {
//     result *= rest[i];
//   }
//   return result;
// }

// console.log(multiply(5));

// console.log(multiply(5, 3));

// console.log(multiply(5, 3, 2));

// b3

// function printInformation(name, email) {
//   if (email) {
//     return `tôi là ${name}. Email của tối là ${email}`;
//   } else {
//     return ` tôi là ${name}. Tôi không có email`;
//   }
// }

// console.log(printInformation("son", "hongson30052k@gmail.com"));
// console.log(printInformation("son"));

// function createCount() {
//   let count = 0; // +1
//   function increase() {
//     return count++;
//   }
//   return increase;
// }

// const increase1 = createCount();

// console.log(increase1()); // 0
// console.log(increase1());

// function createlogger(messspace) {
//   function logger(message) {
//     console.log(`[${messspace}] ${message}`);
//   }
//   return logger;
// }

// const logger1 = createlogger("infor");

// logger1("bắt đầu gởi mail");
// logger1("gởi mail lỗi lần 1");
// logger1("gởi mail lỗi lần 2");

// function createStorage(key) {
//   const store = JSON.parse(localStorage.getItem(key)) ?? {};

//   const save = () => {
//     localStorage.setItem(key, JSON.stringify(store));
//   };

//   const storage = {
//     get(key) {
//       return store[key];
//     },
//     set(key, value) {
//       store[key] = value;
//       save();
//     },
//     remove(key) {
//       delete store[key];
//       save();
//     },
//   };
//   return storage;
// }

// const settingStorage = createStorage("profile_setting");
// settingStorage.set("name", "Nguyen Hong Son");

function createKey(parameters) {
  const store = JSON.parse(localStorage.getItem(parameters)) ?? {};

  const save = () => {
    localStorage.setItem(parameters, JSON.stringify(store));
  };
  const obj = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
    },
    remove(key) {
      delete store[key];
      save();
    },
  };
  return obj;
}

const getKey = createKey("key");
getKey.set("name", "anh yeu em");

console.log(getKey.get("name"));
