import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { USER_GENDERS, USER_ROlES } from '../values/user.values';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop([{ required: true, default: USER_ROlES.CLIENT, enum: USER_ROlES }])
  roles: Array<string>;

  @Prop()
  firstName: string;

  @Prop()
  middleName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  birthday: Date;

  @Prop()
  nationalCode: string;

  @Prop()
  phoneNumber: string;

  @Prop({ required: true, default: USER_GENDERS.UN_NONE, enum: USER_GENDERS })
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
