"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCaseTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_case_type_dto_1 = require("./create-case-type.dto");
class UpdateCaseTypeDto extends (0, swagger_1.PartialType)(create_case_type_dto_1.CreateCaseTypeDto) {
}
exports.UpdateCaseTypeDto = UpdateCaseTypeDto;
//# sourceMappingURL=update-case-type.dto.js.map