import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private _userService: UsersService,
        private _jwtService: JwtService
    ) {

    }

    async validateUser(code: number, nip: string): Promise<any> {
        const user = await this._userService.findOneByCode(code)
        if(user && user.nip == nip) {
            const { nip, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: User){
        const payload = { user, sub: user.id }
        return {
            access_token: this._jwtService.sign(payload)
        }
    }
}
