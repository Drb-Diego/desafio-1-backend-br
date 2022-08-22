-- CreateTable
CREATE TABLE "reduceUrl" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "originalUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "expiresIn" DATETIME NOT NULL
);
