"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJogoFavoritoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateJogoFavoritoDto {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID do jogo',
        example: 'ca5eecec-d709-4f9c-9fa0-3384f6c8c3bb',
    }),
    __metadata("design:type", String)
], CreateJogoFavoritoDto.prototype, "jogoFavoritoId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome do jogo',
        example: 'AC: Revelations',
    }),
    __metadata("design:type", String)
], CreateJogoFavoritoDto.prototype, "nomeJogo", void 0);
exports.CreateJogoFavoritoDto = CreateJogoFavoritoDto;
//# sourceMappingURL=create-perfil-favorito.dto.js.map