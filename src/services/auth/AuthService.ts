import axios from 'axios';

export class AuthService {
  async sendPhoneNumber(phoneNumber: string) {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8000/auth',
      data: {
        phoneNumber,
      },
    });

    console.log(response.data);
  }

  async sendOTPCode(OTPCode: string) {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8000/auth/otp',
      data: {
        OTPCode,
      },
    });

    return response.data.status === 'ok';
  }
}

// interface PersonInterafce {
//   name: string;
//   age: number;
// }

// class Person implements PersonInterafce {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log('Hi ' + this.name);
//   }
// }

// const data = [
//   ['Elbek', 24],
//   ['Azamat', 20],
//   ['Dilshod', 20],
// ];
// const people = [];
// data.forEach(([name, age]) => {
//   people.push(new Person(name, age));
// });
