import {generateRandomString, validBase64} from '.';

const randomString = generateRandomString(10);

console.log(Buffer.from(randomString, 'utf-8').toString('base64'));

console.log(validBase64(Buffer.from(randomString, 'utf-8').toString('base64')));

console.log(validBase64('!$@#(DFHUHR!!!!!!!!~~~'));
