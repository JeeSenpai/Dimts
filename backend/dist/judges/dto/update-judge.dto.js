"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJudgeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_judge_dto_1 = require("./create-judge.dto");
class UpdateJudgeDto extends (0, swagger_1.PartialType)(create_judge_dto_1.CreateJudgeDto) {
}
exports.UpdateJudgeDto = UpdateJudgeDto;
//# sourceMappingURL=update-judge.dto.js.map