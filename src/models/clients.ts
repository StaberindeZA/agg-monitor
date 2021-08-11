import mongoose from 'mongoose';
const {Schema, model} = mongoose;

export enum ClientStatus {
  active = 'active',
  inactive = 'inactive',
  disabled = 'disabled',
}

export interface IClient {
  name: string;
  id: string;
  secret: string;
  status: ClientStatus;
}

const schema = new Schema<IClient>({
  name: String,
  id: String,
  secret: String,
  status: {
    type: String,
    enum: ClientStatus,
  },
});

export const Client = model<IClient>('Client', schema);
