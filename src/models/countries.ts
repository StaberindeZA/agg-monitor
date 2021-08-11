import mongoose from 'mongoose';
import countries from 'i18n-iso-countries';
const {Schema, model} = mongoose;

export interface ICountry {
  countryCode: string;
  countryName: string;
  daysSince: number;
}

const schema = new Schema<ICountry>({
  countryCode: {type: String, length: 3, required: true}, // ISO 3166-1 alpha-3
  countryName: String, // ISO 3166
  daysSince: {type: Number, default: 0},
});

schema.pre('save', function (next) {
  this.countryName = countries.getName(this.countryCode, 'en', {
    select: 'official',
  });
  next();
});

export const Country = model<ICountry>('Country', schema);
