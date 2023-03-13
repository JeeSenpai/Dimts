import { PartialType } from '@nestjs/swagger';
import { CreateJudgeDto } from './create-judge.dto';

export class UpdateJudgeDto extends PartialType(CreateJudgeDto) {}
