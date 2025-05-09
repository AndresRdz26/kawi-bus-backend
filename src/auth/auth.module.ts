import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/auth/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: "kawi",
      signOptions: { expiresIn: '3600s'}
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [ AuthService ]
})
export class AuthModule {}
