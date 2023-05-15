"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_user_type_dto_1 = require("./create-user_type.dto");
class UpdateUserTypeDto extends (0, swagger_1.PartialType)(create_user_type_dto_1.CreateUserTypeDto) {
}
exports.UpdateUserTypeDto = UpdateUserTypeDto;
//# sourceMappingURL=update-user_type.dto.js.map