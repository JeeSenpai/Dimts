"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCitizenDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_citizen_dto_1 = require("./create-citizen.dto");
class UpdateCitizenDto extends (0, swagger_1.PartialType)(create_citizen_dto_1.CreateCitizenDto) {
}
exports.UpdateCitizenDto = UpdateCitizenDto;
//# sourceMappingURL=update-citizen.dto.js.map