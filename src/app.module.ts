import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRolesModule } from './user-roles/user-roles.module';
import { UserTokensModule } from './user-tokens/user-tokens.module';
import * as process from 'node:process';

@Module({
  imports: [
    UsersModule,
    CommentsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_DB_URL, {
      dbName: process.env.MONGO_DB_NAME,
    }),
    UserRolesModule,
    UserTokensModule,
  ],
})
export class AppModule {}
