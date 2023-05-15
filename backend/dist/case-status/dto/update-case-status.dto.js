"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCaseStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_case_status_dto_1 = require("./create-case-status.dto");
class UpdateCaseStatusDto extends (0, swagger_1.PartialType)(create_case_status_dto_1.CreateCaseStatusDto) {
}
exports.UpdateCaseStatusDto = UpdateCaseStatusDto;
//# sourceMappingURL=update-case-status.dto.js.map