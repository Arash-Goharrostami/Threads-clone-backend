import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
  @Prop()
  description: string;

  @Prop()
  likes: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Comment' })
  parentComment: Comment | null = null;

  @Prop([{ type: mongoose.Types.ObjectId, ref: 'Comment' }])
  childComments: Comment | null = null;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  user: User;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
