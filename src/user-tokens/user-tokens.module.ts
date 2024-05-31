import { Module } from '@nestjs/common';
import { UserTokensService } from './user-tokens.service';

@Module({
  providers: [UserTokensService],
})
export class UserTokensModule {}
