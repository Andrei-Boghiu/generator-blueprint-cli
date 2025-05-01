import { Module } from '@nestjs/common';
import { {{name}}Service } from './{{name}}.service';
import { {{name}}Controller } from './{{name}}.controller';

@Module({
  controllers: [{{name}}Controller],
  providers: [{{name}}Service],
})
export class {{Name}}Module {}
