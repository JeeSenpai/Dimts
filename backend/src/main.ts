import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

export default  async function bootstrap() {
  
  var whitelist = ["http://3.115.138.237", "http://localhost:8080", "http://localhost:9000", "http://localhost:8081", "https://dimts-rtc.vercel.app", "https://dimts-production.up.railway.app" ];
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
          //console.log("allowed cors for:", origin)
          callback(null, true)
        } else {
          //console.log("blocked cors for:", origin)
          callback(new Error('Not allowed by CORS'))
        }
      },
        allowedHeaders: 'Origin,Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
        methods: "GET,POST,PUT,PATCH,UPDATE",
        credentials: true,
    }
  });

    const config = new DocumentBuilder()
    .setTitle('DIMTS')
    .setDescription('Document Information Management and Tracking System')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 9000);
}
bootstrap();
