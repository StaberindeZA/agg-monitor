import {Controller, Delete, Get, Post} from '@overnightjs/core';
import {Request, Response} from 'express';
import {User} from '../models/users';
import Debug from 'debug';

const debug = Debug('aggmon:users:controller');

@Controller('users')
export class UsersController {
  @Get()
  private async list(req: Request, res: Response) {
    debug('Start - List Users');
    const users = await User.find().limit(10);
    debug(`End - Found ${users?.length || 0} users`);
    res.json(users);
  }

  @Post()
  private async create(req: Request, res: Response) {
    debug('Start - Create User');
    const body = req.body;
    const user = new User(body);
    await user.save();
    debug(`End - Successfully created user ${user.email}`);
    res.json(user);
  }

  @Delete(':id')
  private async delete(req: Request, res: Response) {
    debug('Start - Delete Country');
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if (user) {
      debug(`End - Delete Country: ${id}`);
      res.status(204).send();
    } else {
      res.status(404).send('Error');
    }
  }
}
