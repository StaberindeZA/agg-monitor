import mongoose from 'mongoose';
import countries from 'i18n-iso-countries';
import {IDetailedInfo} from './detailedInfo';

const {Schema, model} = mongoose;

export interface ICountry {
  code: string;
  name?: string;
  counter?: number;
  detailedInfo?: IDetailedInfo[];
}

const schema = new Schema<ICountry>({
  code: {type: String, length: 3, required: true}, // ISO 3166-1 alpha-3
  name: String, // ISO 3166
  counter: {type: Number, default: 0},
  detailedInfo: [
    {
      type: Schema.Types.ObjectId,
      ref: 'DetailedInfo',
    },
  ],
});

schema.pre('save', function (next) {
  this.name = countries.getName(this.code, 'en', {
    select: 'official',
  });
  next();
});

export const Country = model<ICountry>('Country', schema);
