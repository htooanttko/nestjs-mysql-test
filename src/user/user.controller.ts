import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

        @Get()
        findAll(){
            return this.userService.findAll()
        }

        @Get(":id")
        findOne(@Param("id",ParseIntPipe) id:number){
            return this.userService.findOne(id)
        }

        @Post()
        create(@Body(ValidationPipe) createUserDto:CreateUserDto){
            return this.userService.create(createUserDto);
        }

        @Put(":id")
        update(@Param("id") id:number , @Body(ValidationPipe) updateUserDto: UpdateUserDto){
            return this.userService.update(id,updateUserDto)
        }

        @Delete(":id")
        delete(@Param("id") id:number){
            return this.userService.delete(id)
        }
    
}
