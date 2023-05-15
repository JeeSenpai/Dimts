"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHearingTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_hearing_type_dto_1 = require("./create-hearing-type.dto");
class UpdateHearingTypeDto extends (0, swagger_1.PartialType)(create_hearing_type_dto_1.CreateHearingTypeDto) {
}
exports.UpdateHearingTypeDto = UpdateHearingTypeDto;
//# sourceMappingURL=update-hearing-type.dto.js.map