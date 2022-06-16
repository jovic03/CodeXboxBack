"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedUser = void 0;
const common_1 = require("@nestjs/common");
exports.LoggedUser = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    delete user.password;
    return user;
});
//# sourceMappingURL=logged-user.decorator.js.map