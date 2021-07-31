import {Controller, Get} from '@overnightjs/core';
import {Request, Response} from 'express';
import Debug from 'debug';

const debug = Debug('valiu:testing');

@Controller('countries')
export class CountriesController {
  @Get('merchant-accounts')
  private async get(req: Request, res: Response) {
    try {
      return res.status(200).json({
        data: 'Hello',
      });
    } catch (err) {
      console.log(err);
      return res.status(err.response.status).json({
        err_message: err.response.statusText,
      });
    }
  }
}
