import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { USER_ROlES } from '../values/user-role.values';
import { User } from '../../users/schemas/user.schema';

export type UserRoleDocument = HydratedDocument<UserRole>;

@Schema({ timestamps: true })
export class UserRole {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true, default: USER_ROlES.CLIENT, enum: USER_ROlES })
  role: string;

  @Prop()
  provinces: Array<string>;

  @Prop()
  cities: Array<string>;

  @Prop()
  title: string;

  @Prop()
  address: string;

  @Prop()
  blocks: Array<any>;
}

export const UserRoleSchema = SchemaFactory.createForClass(User);
