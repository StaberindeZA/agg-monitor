import mongoose from 'mongoose';
import {isUuid, uuid} from 'uuidv4';
import {generateRandomString, validBase64} from '../utils';
const {Schema, model} = mongoose;

export enum ClientStatus {
  active = 'active',
  inactive = 'inactive',
  disabled = 'disabled',
}

export interface IClient {
  name: string;
  id?: string;
  secret?: string;
  status: ClientStatus;
}

const schema = new Schema<IClient>({
  name: {type: String, required: true},
  id: {type: String, default: uuid()},
  secret: {
    type: String,
    default: Buffer.from(generateRandomString(5), 'utf-8').toString('base64'),
  },
  status: {
    type: String,
    enum: ClientStatus,
    required: true,
  },
});

schema.pre('save', async function () {
  return new Promise((resolve, reject) => {
    if (this.id && !isUuid(this.id)) reject('Invalid UUID provided for ID');

    if (this.secret && !validBase64(this.secret))
      reject('Invalid secret provided. Needs to be a valid base64');

    return resolve();
  });
});

export const Client = model<IClient>('Client', schema);
