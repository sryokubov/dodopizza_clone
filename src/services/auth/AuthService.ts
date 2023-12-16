import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

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

  async sendOTPCode(OTPCode: string, phoneNumber: string) {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8000/auth/otp',
      data: {
        OTPCode,
        phoneNumber,
      },
    });

    if (response.data.success) {
      this.setToken(response.data.token);
      return { status: 'ok' };
    } else {
      return { status: 'error' };
    }
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    const decodedToken = jwtDecode(token);
    return decodedToken.exp! < Date.now() / 1000;
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
