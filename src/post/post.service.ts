import { Todo } from './../entities/todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Todo) public readonly todoRepository: Repository<Todo>,
  ) {}

  async getPosts() {
    return this.todoRepository.find();
  }

  async getPost(id: number) {
    return await this.todoRepository.findOne({ where: { id } });
  }
  async createPost(text: string) {
    const todo = new Todo();
    todo.text = text;
    return await this.todoRepository.save(todo);
  }
}
