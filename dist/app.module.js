"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const genero_module_1 = require("./genero/genero.module");
const jogo_module_1 = require("./jogos/jogo.module");
const prisma_module_1 = require("./prisma/prisma.module");
const favoritos_module_1 = require("./favoritos/favoritos.module");
const perfil_module_1 = require("./perfil/perfil.module");
const usuario_module_1 = require("./usuario/usuario.module");
const auth_module_1 = require("./auth/auth.module");
const homepage_module_1 = require("./homepage/homepage.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [jogo_module_1.JogoModule, genero_module_1.GeneroModule, prisma_module_1.PrismaModule, favoritos_module_1.FavoritosModule, perfil_module_1.PerfilModule, usuario_module_1.UsuarioModule, auth_module_1.AuthModule, homepage_module_1.HomepageModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map