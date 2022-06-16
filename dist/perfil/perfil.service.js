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
exports.PerfilService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const handle_error_util_1 = require("../utils/handle-error.util");
let PerfilService = class PerfilService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.profiles.findMany({
            include: {
                User: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        password: false,
                        cpf: true,
                        isAdmin: true,
                        createdAt: false,
                        updatedAt: false,
                    }
                },
                jogos: {
                    select: {
                        id: true,
                        title: true,
                        coverImageUrl: false,
                        description: false,
                        year: false,
                        imdbScore: false,
                        trailerYouTubeUrl: false,
                        gameplayYouTubeUrl: false,
                        createdAt: false,
                        updatedAt: false,
                    }
                },
                jogoFavorito: {
                    select: {
                        id: true,
                        profile: true,
                        jogo: {
                            select: {
                                title: true,
                                genero: true
                            }
                        },
                        createdAt: false,
                        updatedAt: false,
                    }
                }
            }
        });
    }
    async findOne(id) {
        return this.prisma.profiles.findUnique({
            where: { id },
            include: {
                jogos: {
                    select: {
                        title: true,
                        genero: {
                            select: {
                                genero: true,
                            }
                        },
                        description: true,
                        coverImageUrl: true,
                        gameplayYouTubeUrl: true,
                        trailerYouTubeUrl: true,
                        imdbScore: true,
                        jogoFavorito: true
                    }
                }
            }
        });
    }
    create(createPerfilDto) {
        const data = Object.assign({}, createPerfilDto);
        return this.prisma.profiles
            .create({
            data: {
                User: {
                    connect: { id: createPerfilDto.userId }
                },
                title: data.title,
                ImageURL: data.ImageURL,
                jogos: {
                    connect: {
                        title: createPerfilDto.jogoIds
                    }
                },
                jogoFavorito: {
                    createMany: {
                        data: createPerfilDto.jogosFavoritos.map((createJogoFavoritoDto) => ({
                            jogoId: createJogoFavoritoDto.jogoFavoritoId,
                            jogoNome: createJogoFavoritoDto.nomeJogo
                        }))
                    }
                }
            },
        }).catch(handle_error_util_1.handleError);
    }
    async update(id, dto) {
        await this.findOne(id);
        const data = Object.assign({}, dto);
        return this.prisma.profiles.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        await this.findOne(id);
        await this.prisma.profiles.delete({
            where: { id },
        });
    }
};
PerfilService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PerfilService);
exports.PerfilService = PerfilService;
//# sourceMappingURL=perfil.service.js.map