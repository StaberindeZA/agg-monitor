import mongoose from 'mongoose';
import {Country, ICountry} from '../models/countries';
import {DetailedInfo, IDetailedInfo} from '../models/detailedInfo';

async function setupDatabase(): Promise<void> {
  const mongoUri =
    process.env.MONGO_URI || 'mongodb://localhost:27017/agg-monitor-staging';
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Country.deleteMany();
  } catch (err) {
    console.log(err);
  }
}

const createCountry = async (countryData: ICountry, info?: IDetailedInfo[]) => {
  if (info) countryData.detailedInfo = info;
  const country = new Country(countryData);
  await country.save();
  return country;
};

const createDetailedInfo = async (info: IDetailedInfo) => {
  const detailedInfo = new DetailedInfo(info);
  return detailedInfo.save();
};

async function loadTestData() {
  await setupDatabase();

  const info1: IDetailedInfo = {
    date: Date.now(),
    source: 'The New York Times',
    summary:
      'How the U.S. Hid an Airstrike That Killed Dozens of Civilians in Syria',
    sourceURL:
      'https://www.nytimes.com/2021/11/13/us/us-airstrikes-civilian-deaths.html',
  };

  const info1Obj = await createDetailedInfo(info1);

  const countryUS = await createCountry(
    {
      code: 'US',
    },
    [info1Obj._id]
  );

  const countryCN = await createCountry({
    code: 'CN',
  });
}

loadTestData()
  .then(() => {
    console.log('And done');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
