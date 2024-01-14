
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'; // New
import { join } from 'path'; // New
import { DrizzleModule } from './drizzle/drizzle.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '..', 'public/'), // New
    }),
    DrizzleModule,
    UsersModule, // New
    ConfigModule.forRoot({ isGlobal: true }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
