# Respecto a la Database

La base de datos es manejada por drizzle: https://orm.drizzle.team/docs
Las tablas se manejan en ./src/database/schema/
Todas las .schema.ts que esten ahi seran generadas y migradas a la base de datos

## Credenciales

Las Credenciales para la base de datos estan en el archivo `.env` en la variable DATABASE_URL
Este archivo no se debe subir a git

## Comandos para migrar

### generate

Genera el sql de las tablas y las guarda en: ./drizzle/

> pnpm drizzle-kit generate

### migrate

Usa el sql generado anteriormente y crea las tablas en la base de datos

> pnpm drizzle-kit migrate


