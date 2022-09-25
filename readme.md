# About this
Since the current Genshin API was abandoned several versions ago, I decided to make my own

## connect
```bash
$env:DATABASE_URL = "postgresql://adminAlice:<ENTER-SQL-USER-PASSWORD>@free-tier4.aws-us-west-2.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dnext-genshin-db-3830"
```

# Prisma follow up

## Prisma installation 
- npm i -D prisma
- npx prisma init

## Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no 
tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.     
