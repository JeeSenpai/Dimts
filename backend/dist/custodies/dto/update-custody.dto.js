"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustodyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_custody_dto_1 = require("./create-custody.dto");
class UpdateCustodyDto extends (0, swagger_1.PartialType)(create_custody_dto_1.CreateCustodyDto) {
}
exports.UpdateCustodyDto = UpdateCustodyDto;
//# sourceMappingURL=update-custody.dto.js.map