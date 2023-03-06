import { PostService } from './post.service';
import { Todo } from './../entities/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
