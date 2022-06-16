"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJogoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_jogo_dto_1 = require("./create-jogo.dto");
class UpdateJogoDto extends (0, mapped_types_1.PartialType)(create_jogo_dto_1.CreateJogoDto) {
}
exports.UpdateJogoDto = UpdateJogoDto;
//# sourceMappingURL=update-jogo.dto.js.map