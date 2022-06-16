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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const handle_error_util_1 = require("../utils/handle-error.util");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UsuarioService = class UsuarioService {
    constructor(prisma) {
        this.prisma = prisma;
        this.usuarioSelect = {
            id: true,
            name: true,
            email: true,
            password: false,
            cpf: true,
            isAdmin: false,
            createdAt: true,
            updatedAt: true,
        };
    }
    async create(createuserDto) {
        if (createuserDto.password !== createuserDto.passwordConfirmation) {
            throw new common_1.BadRequestException('Senhas não conferem.');
        }
        delete createuserDto.passwordConfirmation;
        const data = Object.assign(Object.assign({}, createuserDto), { password: await bcrypt.hash(createuserDto.password, 10) });
        return this.prisma.user.create({
            data,
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                cpf: true,
                isAdmin: false,
                createdAt: true,
                updatedAt: true,
            }
        }).catch(handle_error_util_1.handleError);
    }
    findAll() {
        return this.prisma.user.findMany({
            select: this.usuarioSelect
        }).catch(handle_error_util_1.handleError);
    }
    async findById(id) {
        const record = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                cpf: true,
                isAdmin: false,
                createdAt: true,
                updatedAt: true,
            }
        }).catch(handle_error_util_1.handleError);
        if (!record) {
            throw new common_1.NotFoundException(`Registro com o '${id}' não encontrado.`);
        }
        return record;
    }
    async findOne(email) {
        const data = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                cpf: true,
                isAdmin: true,
                createdAt: true,
                updatedAt: true,
            }
        }).catch(handle_error_util_1.handleError);
        if (!data) {
            throw new common_1.NotFoundException('Usuario não cadastrado');
        }
        return data;
    }
    async update(id, updateUsuarioDto) {
        await this.findById(id);
        if (updateUsuarioDto.cpf) {
            throw new common_1.BadRequestException('Não é possivel alterar o CPF');
        }
        if (updateUsuarioDto.password) {
            if (updateUsuarioDto.password !== updateUsuarioDto.passwordConfirmation) {
                throw new common_1.BadRequestException('Senhas não conferem');
            }
        }
        delete updateUsuarioDto.passwordConfirmation;
        const data = Object.assign({}, updateUsuarioDto);
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        return this.prisma.user.update({
            data,
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                cpf: true,
                isAdmin: false,
                createdAt: false,
                updatedAt: false,
            }
        }).catch(handle_error_util_1.handleError);
    }
    async delete(id) {
        await this.findById(id);
        await this.prisma.user.delete({ where: { id } }).catch(handle_error_util_1.handleError);
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map