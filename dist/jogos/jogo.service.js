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
exports.JogoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let JogoService = class JogoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.jogo.findMany();
    }
    async findById(id) {
        const record = await this.prisma.jogo.findUnique({
            where: { id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Registro com o '${id}' não encontrado.`);
        }
        return record;
    }
    async findOne(id) {
        return this.findById(id);
    }
    create(user, createJogoDto) {
        if (!user.isAdmin) {
            throw new common_1.UnauthorizedException('Usuario deve ser Admin para criar um jogo');
        }
        const data = Object.assign({}, createJogoDto);
        return this.prisma.jogo.create({
            data: {
                id: data.id,
                title: data.title,
                genero: {
                    connect: { genero: data.genero.toString() }
                },
                description: data.description,
                coverImageUrl: data.coverImageUrl,
                year: data.year,
                imdbScore: data.imdbScore,
                trailerYouTubeUrl: data.trailerYouTubeUrl,
                gameplayYouTubeUrl: data.gameplayYouTubeUrl
            }
        });
    }
    async update(user, id, dto) {
        if (!user.isAdmin) {
            throw new common_1.UnauthorizedException('Usuario deve ser Admin para criar um gênero');
        }
        await this.findById(id);
        const data = Object.assign({}, dto);
        return this.prisma.jogo.update({
            where: { id },
            data,
        });
    }
    async delete(user, id) {
        if (!user.isAdmin) {
            throw new common_1.UnauthorizedException('Usuario deve ser Admin para criar um gênero');
        }
        await this.findById(id);
        await this.prisma.jogo.delete({ where: { id } });
    }
};
JogoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JogoService);
exports.JogoService = JogoService;
//# sourceMappingURL=jogo.service.js.map