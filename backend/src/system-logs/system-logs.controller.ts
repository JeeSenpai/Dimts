import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SystemLogsService } from './system-logs.service';
import { CreateSystemLogDto } from './dto/create-system-log.dto';
import { UpdateSystemLogDto } from './dto/update-system-log.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('System Logs')
@Controller('system-logs')
export class SystemLogsController {
  constructor(private readonly systemLogsService: SystemLogsService) {}

  @Post()
  create(@Body() data: any) {
    return this.systemLogsService.create(data);
  }

  @Get()
  findAll() {
    return this.systemLogsService.findAll();
  }

  @Get('findLoginDate/:date')
  findOne(@Param('date') date: string) {
    return this.systemLogsService.findLoginDate(date);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSystemLogDto: UpdateSystemLogDto) {
    return this.systemLogsService.update(+id, updateSystemLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.systemLogsService.remove(+id);
  }
}
