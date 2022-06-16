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
exports.CreatePerfilDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_perfil_favorito_dto_1 = require("./create-perfil-favorito.dto");
class CreatePerfilDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome de perfil. Utilizado no login. Deve ser único',
        example: 'Perfil1',
    }),
    __metadata("design:type", String)
], CreatePerfilDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, swagger_1.ApiProperty)({
        description: 'Imagem de perfil do usuário',
        example: 'https://www.seekpng.com/png/full/966-9665493_my-profile-icon-blank-profile-image-circle.png',
    }),
    __metadata("design:type", String)
], CreatePerfilDto.prototype, "ImageURL", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID de jogos',
        example: '04f1f8e9-3a88-4e7a-a9d6-07ff3ecc8069',
    }),
    __metadata("design:type", String)
], CreatePerfilDto.prototype, "jogoIds", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID de usuario',
        example: '2c662b25-c07d-4e92-ad31-6ccc1ccf22e0',
    }),
    __metadata("design:type", String)
], CreatePerfilDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({
        each: true,
    }),
    (0, class_transformer_1.Type)(() => create_perfil_favorito_dto_1.CreateJogoFavoritoDto),
    (0, swagger_1.ApiProperty)({
        description: 'Lista com os IDs dos jogos',
        type: [create_perfil_favorito_dto_1.CreateJogoFavoritoDto]
    }),
    __metadata("design:type", Array)
], CreatePerfilDto.prototype, "jogosFavoritos", void 0);
exports.CreatePerfilDto = CreatePerfilDto;
//# sourceMappingURL=create-perfil.dto.js.map