import mongoose from 'mongoose';
import countries from 'i18n-iso-countries';
import {ICountry} from './countries';
const {Schema, model} = mongoose;

export interface IDetailedInfo {
  date: number;
  source: string;
  title?: string;
  summary: string;
  sourceURL: string;
  country?: ICountry;
}

const schema = new Schema<IDetailedInfo>({
  date: {type: Number, required: true},
  source: {type: String, required: true},
  title: {type: String},
  summary: {type: String, required: true},
  sourceURL: {type: String, required: true},
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country',
  },
});

schema.pre('save', function (next) {
  this.countryName = countries.getName(this.countryCode, 'en', {
    select: 'official',
  });
  next();
});

export const DetailedInfo = model<IDetailedInfo>('DetailedInfo', schema);
