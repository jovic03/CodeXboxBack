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
exports.CreateJogoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateJogoDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome do jogo',
        example: 'Jogo Nome',
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Capa do jogo',
        example: 'www.imagemdobioshock.com',
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "coverImageUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Descricao do jogo',
        example: 'Descricao do jogo',
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Ano de lancamento do jogo',
        example: '2007',
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nota do IMDB de 0 à 5',
        example: '5',
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "imdbScore", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Trailer do jogo',
        example: 'https://www.youtube.com/watch?v=nqqZwoqCwXU',
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "trailerYouTubeUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Gameplay do jogo SaaS',
        example: 'https://www.youtube.com/watch?v=Yyz4NYpt8v4',
    }),
    __metadata("design:type", String)
], CreateJogoDto.prototype, "gameplayYouTubeUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Genero',
        example: 'FPS',
    }),
    __metadata("design:type", Array)
], CreateJogoDto.prototype, "genero", void 0);
exports.CreateJogoDto = CreateJogoDto;
//# sourceMappingURL=create-jogo.dto.js.map