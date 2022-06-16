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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneroController = void 0;
const common_1 = require("@nestjs/common");
const genero_service_1 = require("./genero.service");
const create_genero_dto_1 = require("./dto/create-genero.dto");
const swagger_1 = require("@nestjs/swagger");
const update_genero_dto_1 = require("./dto/update-genero.dto");
const passport_1 = require("@nestjs/passport");
const logged_user_decorator_1 = require("../auth/logged-user.decorator");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
let GeneroController = class GeneroController {
    constructor(generoService) {
        this.generoService = generoService;
    }
    findAll() {
        return this.generoService.findAll();
    }
    findOne(id) {
        return this.generoService.findOne(id);
    }
    create(user, createGeneroDto) {
        return this.generoService.create(user, createGeneroDto);
    }
    update(user, id, dto) {
        return this.generoService.update(user, id, dto);
    }
    delete(user, id) {
        this.generoService.delete(user, id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Lista todos generos'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Ver um genero'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Criar um genero'
    }),
    __param(0, (0, logged_user_decorator_1.LoggedUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario, create_genero_dto_1.CreateGeneroDto]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Editar um genero pelo ID'
    }),
    __param(0, (0, logged_user_decorator_1.LoggedUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario, String, update_genero_dto_1.UpdateGeneroDto]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Deletar um genero pelo ID'
    }),
    __param(0, (0, logged_user_decorator_1.LoggedUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario, String]),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "delete", null);
GeneroController = __decorate([
    (0, swagger_1.ApiTags)('genero'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('genero'),
    __metadata("design:paramtypes", [genero_service_1.GeneroService])
], GeneroController);
exports.GeneroController = GeneroController;
//# sourceMappingURL=genero.controller.js.map