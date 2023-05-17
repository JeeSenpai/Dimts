"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    var whitelist = ["http://3.115.138.237", "http://localhost:8080", "http://localhost:8000", "http://localhost:8081"];
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: function (origin, callback) {
                if (!origin || whitelist.indexOf(origin) !== -1) {
                    callback(null, true);
                }
                else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            allowedHeaders: 'Origin,Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
            methods: "GET,POST,PUT,PATCH,UPDATE",
            credentials: true,
        }
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('AUMS')
        .setDescription('Academic Unit Management System')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(9000);
}
bootstrap();
//# sourceMappingURL=main.js.map