/* eslint-disable */
export default async () => {
    const t = {
        ["./auth/entities/token.entity"]: await import("./auth/entities/token.entity")
    };
    return { "@nestjs/swagger/plugin": { "models": [[import("./auth/dto/signup.dto"), { "SignupDto": { account: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 6 }, firstname: { required: false, type: () => String }, lastname: { required: false, type: () => String } } }], [import("./auth/entities/token.entity"), { "Token": { token: { required: false, type: () => String }, accessToken: { required: false, type: () => String }, refreshToken: { required: false, type: () => String } } }], [import("./auth/dto/refresh-token.dto"), { "RefreshTokenDto": { token: { required: true, type: () => String } } }], [import("./menu/dto/create-menu.dto"), { "CreateMenuDto": { name: { required: true, type: () => String }, key: { required: true, type: () => String }, parentId: { required: false, type: () => String }, breadcrumb: { required: false, type: () => Boolean }, ignore: { required: false, type: () => Boolean } } }], [import("./menu/dto/update-menu.dto"), { "UpdateMenuDto": {} }], [import("./role/dto/create-role.dto"), { "CreateRoleDto": { name: { required: true, type: () => String } } }], [import("./role/dto/update-role.dto"), { "UpdateRoleDto": {} }], [import("./auth/dto/token.dto"), { "TokenDto": { token: { required: true, type: () => String } } }], [import("./common/dto/id.dto"), { "IdDTO": { id: { required: true, type: () => String, pattern: "regPositive" } } }], [import("./common/dto/common.dto"), { "CommonDTO": { createdAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, isDelete: { required: true, type: () => Boolean } } }], [import("./common/dto/pagination.dto"), { "PaginationDTO": { page: { required: false, type: () => Number, pattern: "regPositiveOrEmpty" }, pageSize: { required: false, type: () => Number, pattern: "regPositiveOrEmpty" }, pages: { required: true, type: () => Number }, total: { required: true, type: () => Number } } }], [import("./common/dto/page.dto"), { "PageDTO": {} }], [import("./common/dto/success.dto"), { "SuccessVO": { code: { required: true, type: () => Number }, message: { required: true, type: () => String } } }], [import("./common/entities/common.entity"), { "Common": { id: { required: true, type: () => Number }, createTime: { required: true, type: () => Date }, updateTime: { required: true, type: () => Date }, isDelete: { required: true, type: () => Boolean }, version: { required: true, type: () => Number } } }], [import("./menu/entities/menu.entity"), { "Menu": {} }], [import("./role/entities/role.entity"), { "Role": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "getHelloName": { type: String } } }], [import("./auth/auth.controller"), { "AuthController": { "signup": {}, "login": {}, "refreshToken": { type: t["./auth/entities/token.entity"].Token }, "getUserFromToken": {} } }], [import("./users/users.controller"), { "UsersController": { "getUserInfo": { type: Object }, "updateUser": {}, "changePassword": {} } }], [import("./menu/menu.controller"), { "MenuController": { "create": {}, "findOne": {}, "update": {}, "remove": {} } }], [import("./role/role.controller"), { "RoleController": { "create": {}, "findOne": {}, "update": {}, "remove": {} } }]] } };
};