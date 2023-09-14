/* eslint-disable */
export default async () => {
    const t = {
        ["./auth/entities/token.entity"]: await import("./auth/entities/token.entity")
    };
    return { "@nestjs/swagger/plugin": { "models": [[import("./auth/dto/signup.dto"), { "SignupDto": { account: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 6 } } }], [import("./auth/entities/token.entity"), { "Token": { token: { required: false, type: () => String }, accessToken: { required: false, type: () => String }, refreshToken: { required: false, type: () => String } } }], [import("./auth/dto/refresh-token.dto"), { "RefreshTokenDto": { token: { required: true, type: () => String } } }], [import("./users/dto/change-password.dto"), { "ChangePasswordDto": { oldPassword: { required: true, type: () => String, minLength: 8 }, newPassword: { required: true, type: () => String, minLength: 8 } } }], [import("./users/dto/update-user.dto"), { "UpdateUserDto": { name: { required: false, type: () => String } } }], [import("./menu/dto/create-menu.dto"), { "CreateMenuDto": { title: { required: true, type: () => String }, key: { required: true, type: () => String }, parentId: { required: false, type: () => String }, breadcrumb: { required: false, type: () => Boolean }, ignore: { required: false, type: () => Boolean } } }], [import("./menu/dto/update-menu.dto"), { "UpdateMenuDto": {} }], [import("./role/dto/create-role.dto"), { "CreateRoleDto": { title: { required: true, type: () => String }, key: { required: true, type: () => String }, menus: { required: false, type: () => [Object] } } }], [import("./role/dto/update-role.dto"), { "UpdateRoleDto": {} }], [import("./dictionary/dto/create-dictionary.dto"), { "CreateDictionaryDto": {} }], [import("./dictionary/dto/update-dictionary.dto"), { "UpdateDictionaryDto": {} }], [import("./modules/order/dto/create-order.dto"), { "CreateOrderDto": { orderData: { required: true, type: () => Object }, orderDetailData: { required: true, type: () => [Object] } } }], [import("./modules/order/dto/update-order.dto"), { "UpdateOrderDto": {} }], [import("./modules/order/arrange/dto/create-arrange.dto"), { "CreateArrangeDto": {} }], [import("./modules/order/arrange/dto/update-arrange.dto"), { "UpdateArrangeDto": {} }], [import("./modules/information/customer/dto/create-customer.dto"), { "CreateCustomerDto": {} }], [import("./modules/information/customer/dto/update-customer.dto"), { "UpdateCustomerDto": {} }], [import("./modules/information/specifications/dto/create-specification.dto"), { "CreateSpecificationDto": {} }], [import("./modules/information/specifications/dto/update-specification.dto"), { "UpdateSpecificationDto": {} }], [import("./modules/transfer/dto/create-transfer.dto"), { "CreateTransferDto": {} }], [import("./modules/transfer/dto/update-transfer.dto"), { "UpdateTransferDto": {} }], [import("./picture/dto/picture.dto"), { "PictureDTO": { src: { required: true, type: () => String } } }], [import("./picture/dto/picture-create.dto"), { "PictureCreateDto": { sign: { required: false, type: () => String } } }], [import("./auth/dto/token.dto"), { "TokenDto": { token: { required: true, type: () => String } } }], [import("./common/dto/id.dto"), { "IdDTO": { id: { required: true, type: () => String, pattern: "regPositive" } } }], [import("./common/dto/common.dto"), { "CommonDTO": { createdAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, isDelete: { required: true, type: () => Boolean } } }], [import("./common/dto/pagination.dto"), { "PaginationDTO": { page: { required: false, type: () => Number, pattern: "regPositiveOrEmpty" }, pageSize: { required: false, type: () => Number, pattern: "regPositiveOrEmpty" }, pages: { required: true, type: () => Number }, total: { required: true, type: () => Number } } }], [import("./common/dto/page.dto"), { "PageDTO": {} }], [import("./common/dto/success.dto"), { "SuccessVO": { code: { required: true, type: () => Number }, message: { required: true, type: () => String } } }], [import("./common/entities/common.entity"), { "Common": { id: { required: true, type: () => Number }, createTime: { required: true, type: () => Date }, updateTime: { required: true, type: () => Date }, isDelete: { required: true, type: () => Boolean }, version: { required: true, type: () => Number } } }], [import("./menu/entities/menu.entity"), { "Menu": {} }], [import("./modules/information/customer/entities/customer.entity"), { "Customer": {} }], [import("./modules/transfer/entities/transfer.entity"), { "Transfer": {} }], [import("./role/entities/role.entity"), { "Role": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "getHelloName": { type: String } } }], [import("./auth/auth.controller"), { "AuthController": { "signup": {}, "login": {}, "refreshToken": { type: t["./auth/entities/token.entity"].Token }, "getUserFromToken": {} } }], [import("./users/users.controller"), { "UsersController": { "getUserInfo": { type: Object }, "getUsersByPaging": {}, "updateUser": {}, "changePassword": {} } }], [import("./menu/menu.controller"), { "MenuController": { "create": {}, "findAll": { type: [Object] }, "findOne": {}, "update": {}, "remove": {} } }], [import("./role/role.controller"), { "RoleController": { "create": {}, "findOne": {}, "update": {}, "remove": {} } }], [import("./dictionary/dictionary.controller"), { "DictionaryController": { "create": {}, "createItem": {}, "findOne": {}, "findDictItemByDictId": {}, "findOneByCode": {}, "update": {}, "updateItem": {}, "remove": {}, "removeItem": {} } }], [import("./modules/order/order.controller"), { "OrderController": { "create": { type: Object }, "findAll": {}, "findAllOrderDetails": {}, "findOrderDetailsById": {}, "getListByPaging": {}, "findOne": {}, "update": { type: Object }, "remove": {}, "removeItem": {} } }], [import("./modules/order/arrange/arrange.controller"), { "ArrangeController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }], [import("./modules/information/customer/customer.controller"), { "CustomerController": { "create": {}, "findAll": {}, "getListByPaging": {}, "findOne": { type: String }, "update": {}, "remove": {} } }], [import("./modules/information/specifications/specifications.controller"), { "SpecificationsController": { "create": {}, "findAll": { type: String }, "getListByPaging": {}, "findOne": {}, "findOneByCode": {}, "update": {}, "remove": {} } }], [import("./modules/transfer/transfer.controller"), { "TransferController": { "create": { type: String }, "batchCreate": {}, "findAll": { type: String }, "getListByPaging": {}, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }], [import("./picture/picture.controller"), { "PictureController": { "upload": { type: Object } } }]] } };
};