module.exports = {
  "type": "mysql",
  "host": "mysql.c2gbi1gy4eg3.us-east-2.rds.amazonaws.com",
  "port": 3306,
  "username": "admin",
  "password": "admin1234",
  "database": "db_devicemanager",
  "entities": [
    "./src/models/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
  }