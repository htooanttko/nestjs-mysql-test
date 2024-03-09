import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private users: Repository<User>,
    ){}

    async findAll(){
        return this.users.find();
    }

    async findOne(id: number){
        return this.users.findOne({where: {id}});
    }

    async create(createUserDto: CreateUserDto){
        return this.users.save(createUserDto);
    }

    async update(id:number ,updateUserDto: UpdateUserDto){
        return this.users.update(id,updateUserDto)
    }

    async delete(id: number){
        return this.users.delete(id)
    }
}
