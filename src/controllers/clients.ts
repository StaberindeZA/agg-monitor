import {Controller, Delete, Get, Post} from '@overnightjs/core';
import {Request, Response} from 'express';
import Debug from 'debug';
import {Client} from '../models/clients';

const debug = Debug('aggmon:clients:controller');

@Controller('clients')
export class ClientsController {
  @Get('')
  private async list(req: Request, res: Response) {
    debug('Start - List Clients');
    const clients = await Client.find().limit(10);
    debug(`End - Found ${clients?.length || 0} clients`);
    return res.json(clients);
  }

  @Post('')
  private async create(req: Request, res: Response) {
    debug('Start - Create Client');
    const {body} = req;
    const client = new Client(body);
    try {
      await client.save();
      debug(`End - Successfully created client ${client.name}`);
      return res.json(client);
    } catch (err) {
      return res.send(err);
    }
  }

  @Delete(':id')
  private async delete(req: Request, res: Response) {
    debug('Start - Delete Client');
    const {id} = req.params;
    await Client.findByIdAndDelete(id);
    debug(`End - Delete Client: ${id}`);
    return res.status(204).send();
  }
}
