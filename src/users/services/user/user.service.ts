import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from '../../entities/user.entity';
import { CreateUserInput } from 'src/users/inputs/create-user.input';
import { UpdateUserInput } from 'src/users/inputs/update-user.input';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {

    }

    async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
		return await this.userRepository.save({ ...createUserInput })
	}

    async getOneUser(id: number): Promise<UserEntity> {
        return await this.userRepository.findOneBy({ id })
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find()
    }

    async removeUser(id: number): Promise<number> {
        await this.userRepository.delete({ id})
        return id
    }

    async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
        await this.userRepository.update({id: updateUserInput.id}, {...updateUserInput})
        return await this.getOneUser(updateUserInput.id)
    }
}
