/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response, Application } from 'express';
import cors from 'cors';

import bodyParser from 'body-parser';

import fr from 'follow-redirects';

const https = fr.https;

import './models/interfaces/pizza';
import { pizzas } from './models/data/pizza';

const app: Application = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const options = {
  method: 'POST',
  hostname: 'vv9jqm.api.infobip.com',
  path: '/sms/2/text/advanced',
  headers: {
    Authorization:
      'App 6ab4f7624db5ecdf31a43b538a5d8c7a-054ceb3e-22d3-47ad-b688-ed026aa6a5f7',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  maxRedirects: 20,
};

let OTPCode: string = '';

function generateOTP() {
  // Define the length of the OTP
  const otpLength = 4;

  // Generate a random 4-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000);

  // Ensure that the generated OTP is exactly 4 digits
  return otp.toString().padStart(otpLength, '0');
}

app.post('/auth/otp', (req: Request, res: Response) => {
  if (OTPCode === req.body.OTPCode) {
    res.send({ status: 'ok' });
  }
});

app.post('/auth', (req: Request, res: Response) => {
  const request = https.request(options, function (res) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chunks: any[] = [];

    res.on('data', function (chunk) {
      chunks.push(chunk);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.on('end', function (chunk: any) {
      const body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on('error', function (error) {
      console.error(error);
    });
  });

  OTPCode = generateOTP();

  const postData = JSON.stringify({
    messages: [
      {
        destinations: [
          {
            to: req.body.phoneNumber,
          },
        ],
        from: 'Digitopia',
        text: OTPCode,
      },
    ],
  });

  request.write(postData);
  request.end();

  console.log(req.body);
  res.send({ msg: 'Done' });
});

app.get('/', (req: Request, res: Response) => {
  res.json(pizzas);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
