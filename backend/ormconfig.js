module.exports = {
  "type": "mysql",
  "host": "mysql.c2gbi1gy4eg3.us-east-2.rds.amazonaws.com",
  "port": 3306,
  "username": "admin",
  "password": "admin1234",
  "database": "db_devicemanager",
  "entities": [
    //"./src/models/*{.ts,.js}" para rodar local
    "./dist/models/*{.ts,.js}"
  ],
  "migrations": [
    "./dist/database/migrations/*{.ts,.js}"
  ],
  "cli": {
    "migrationsDir": "./dist/database/migrations"
  }
  }
