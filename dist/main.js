"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true
    });
    app.set('trust proxy', 1);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('XboxJovic')
        .setDescription('Dashboard do Xbox Blue-Jovic')
        .setVersion('1.0.0')
        .addTag('status')
        .addTag('auth')
        .addTag('jogo')
        .addTag('genero')
        .addTag('perfil')
        .addTag('usuario')
        .addTag('favoritos')
        .addTag('homepage')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3444);
}
bootstrap();
//# sourceMappingURL=main.js.map