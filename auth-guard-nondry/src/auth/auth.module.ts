import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PublicAwareAuthLocalAlternativeGuard } from './public-aware-auth-local-alternative.guard';
import { PublicAwareAuthLocalPrimaryGuard } from './public-aware-auth-local-primary.guard';
import { StrategyLocalPrimary } from './strategy-local-primary';
import { StrategyLocalSecondary } from './strategy-local-secondary';
import { AuthService } from './auth.service';

@Module({
    imports: [UsersModule],
    providers: [PublicAwareAuthLocalPrimaryGuard, PublicAwareAuthLocalAlternativeGuard, StrategyLocalPrimary, StrategyLocalSecondary, AuthService],
    exports: [PublicAwareAuthLocalPrimaryGuard, PublicAwareAuthLocalAlternativeGuard],
})
export class AuthModule {}
