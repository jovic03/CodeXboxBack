"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHomepageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_homepage_dto_1 = require("./create-homepage.dto");
class UpdateHomepageDto extends (0, swagger_1.PartialType)(create_homepage_dto_1.CreateHomepageDto) {
}
exports.UpdateHomepageDto = UpdateHomepageDto;
//# sourceMappingURL=update-homepage.dto.js.map