import { Controller, Get, Render, UseFilters } from '@nestjs/common';
import { AuthExceptionFilter } from '../common/filters/auth-exceptions.filter';

@Controller('register')
@UseFilters(AuthExceptionFilter)
export class RegisterController {
  @Get()
  @Render('register')
  index(req, res) {
    return;
  }

  // @Post
}
