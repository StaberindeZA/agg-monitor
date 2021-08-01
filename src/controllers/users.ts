import {Controller, Get, Post} from '@overnightjs/core';
import {Request, Response} from 'express';
import {User} from '../models/users';

@Controller('users')
export class UsersController {
  @Get('')
  private async list(req: Request, res: Response) {
    const users = await User.find().limit(10);
    res.json(users);
  }

  @Post()
  private async create(req: Request, res: Response) {
    const body = req.body;
    const user = new User(body);
    await user.save();
    res.json(user);
  }
}
