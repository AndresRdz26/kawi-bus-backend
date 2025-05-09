import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private _repository: Repository<User>
  ) {

  }

  findOneByCode(code: number){
    return this._repository.findOne({ where: { code }});
  }

  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.code = createUserDto.code
    user.email = createUserDto.email
    user.nip = createUserDto.nip

    return this._repository.save(user)
  }

  findOne(id: number){
    return this._repository.findOne({ where: { id }})
  }

}
