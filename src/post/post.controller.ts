import { PostService } from './post.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/all')
  getPosts() {
    return this.postService.getPosts();
  }

  @Get('/one/:id')
  getPost(@Param() param) {
    return this.postService.getPost(param.id);
  }

  @Post('/create')
  createPost(@Body() body) {
    return this.postService.createPost(body.text);
  }
}
