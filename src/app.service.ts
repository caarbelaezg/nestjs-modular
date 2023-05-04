import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}

  getHello(): string {
    const apiKey = this.config.get('API_KEY');
    return `Hello world! ${apiKey}`;
  }
}
