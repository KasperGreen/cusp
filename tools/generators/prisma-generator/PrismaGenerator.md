

PrismaGenerator
==

Взято отсюда [Building an Nx Prisma Generator](https://sabinadams.hashnode.dev/nx-prisma-generator)


Чтобы сгенерировать новую библиотеку схем\запросов Prisma
```shell
nx workspace-generator prisma-generator GeneratedSchemaName
```
Вместо GeneratedSchemaName имя апихи


Отправить схему в БД и сгенерировать клиента
```shell
prisma db push --schema="./libs/prisma-clients/generated-schema-name/prisma/schema.prisma"
prisma generate --schema="./libs/prisma-clients/generated-schema-name/prisma/schema.prisma"
prisma migrate dev --schema="./libs/prisma-clients/generated-schema-name/prisma/schema.prisma"
```


prisma migrate dev --schema="./libs/prisma-clients/teamogram/prisma/schema.prisma"
prisma db push --schema="./libs/prisma-clients/teamogram/prisma/schema.prisma"
prisma generate --schema="./libs/prisma-clients/teamogram/prisma/schema.prisma"

