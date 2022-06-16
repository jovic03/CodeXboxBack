"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsuarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_usuario_dto_1 = require("./create-usuario.dto");
class UpdateUsuarioDto extends (0, swagger_1.PartialType)(create_usuario_dto_1.CreateUsuarioDto) {
}
exports.UpdateUsuarioDto = UpdateUsuarioDto;
//# sourceMappingURL=update-usuario.dto.js.map