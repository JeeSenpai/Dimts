"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOfficeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_office_dto_1 = require("./create-office.dto");
class UpdateOfficeDto extends (0, swagger_1.PartialType)(create_office_dto_1.CreateOfficeDto) {
}
exports.UpdateOfficeDto = UpdateOfficeDto;
//# sourceMappingURL=update-office.dto.js.map