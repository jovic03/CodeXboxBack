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
exports.JogoController = void 0;
const common_1 = require("@nestjs/common");
const jogo_service_1 = require("./jogo.service");
const create_jogo_dto_1 = require("./dto/create-jogo.dto");
const swagger_1 = require("@nestjs/swagger");
const update_jogo_dto_1 = require("./dto/update-jogo.dto");
const passport_1 = require("@nestjs/passport");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const logged_user_decorator_1 = require("../auth/logged-user.decorator");
let JogoController = class JogoController {
    constructor(jogoService) {
        this.jogoService = jogoService;
    }
    findAll() {
        return this.jogoService.findAll();
    }
    findOne(id) {
        return this.jogoService.findOne(id);
    }
    create(user, createJogoDto) {
        return this.jogoService.create(user, createJogoDto);
    }
    update(user, id, dto) {
        return this.jogoService.update(user, id, dto);
    }
    delete(user, id) {
        this.jogoService.delete(user, id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Lista todos Jogos'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JogoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Ver um jogo'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JogoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Criar um Jogo'
    }),
    __param(0, (0, logged_user_decorator_1.LoggedUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario, create_jogo_dto_1.CreateJogoDto]),
    __metadata("design:returntype", Promise)
], JogoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Editar um jogo pelo ID'
    }),
    __param(0, (0, logged_user_decorator_1.LoggedUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario, String, update_jogo_dto_1.UpdateJogoDto]),
    __metadata("design:returntype", Promise)
], JogoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Deletar um jogo pelo ID'
    }),
    __param(0, (0, logged_user_decorator_1.LoggedUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario, String]),
    __metadata("design:returntype", void 0)
], JogoController.prototype, "delete", null);
JogoController = __decorate([
    (0, swagger_1.ApiTags)('jogo'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('jogo'),
    __metadata("design:paramtypes", [jogo_service_1.JogoService])
], JogoController);
exports.JogoController = JogoController;
//# sourceMappingURL=jogo.controller.js.map