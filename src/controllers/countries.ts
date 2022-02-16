import {Controller, Delete, Get, Post} from '@overnightjs/core';
import {Request, Response} from 'express';
import Debug from 'debug';
import {Country} from '../models/countries';

const debug = Debug('aggmon:countries:controller');

@Controller('countries')
export class CountriesController {
  @Get('')
  private async list(req: Request, res: Response) {
    debug('Start - List Countries');
    const countries = await Country.find().limit(10);
    debug(`End - Found ${countries?.length || 0} countries`);
    return res.json(countries);
  }

  @Post('')
  private async create(req: Request, res: Response) {
    debug('Start - Create Country');
    const {body} = req;
    const country = new Country(body);
    await country.save();
    debug(`End - Successfully created country ${country.name}`);
    return res.json(country);
  }

  @Delete(':id')
  private async delete(req: Request, res: Response) {
    debug('Start - Delete Country');
    const {id} = req.params;
    await Country.findByIdAndDelete(id);
    debug(`End - Delete Country: ${id}`);
    return res.status(204).send();
  }
}
