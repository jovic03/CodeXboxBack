"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePerfilDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_perfil_dto_1 = require("./create-perfil.dto");
class UpdatePerfilDto extends (0, swagger_1.PartialType)(create_perfil_dto_1.CreatePerfilDto) {
}
exports.UpdatePerfilDto = UpdatePerfilDto;
//# sourceMappingURL=update-perfil.dto.js.map