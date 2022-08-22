-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_reduceUrl" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "originalUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "expiresIn" TEXT NOT NULL
);
INSERT INTO "new_reduceUrl" ("expiresIn", "id", "originalUrl", "shortUrl") SELECT "expiresIn", "id", "originalUrl", "shortUrl" FROM "reduceUrl";
DROP TABLE "reduceUrl";
ALTER TABLE "new_reduceUrl" RENAME TO "reduceUrl";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
