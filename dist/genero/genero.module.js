"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneroModule = void 0;
const common_1 = require("@nestjs/common");
const genero_service_1 = require("./genero.service");
const genero_controller_1 = require("./genero.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const passport_1 = require("@nestjs/passport");
let GeneroModule = class GeneroModule {
};
GeneroModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' })],
        providers: [genero_service_1.GeneroService],
        controllers: [genero_controller_1.GeneroController]
    })
], GeneroModule);
exports.GeneroModule = GeneroModule;
//# sourceMappingURL=genero.module.js.map