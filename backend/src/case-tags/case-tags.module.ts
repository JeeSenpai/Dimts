import { Module } from '@nestjs/common';
import { CaseTagsService } from './case-tags.service';
import { CaseTagsController } from './case-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseTag } from './entities/case-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaseTag])],
  controllers: [CaseTagsController],
  providers: [CaseTagsService]
})
export class CaseTagsModule {}
