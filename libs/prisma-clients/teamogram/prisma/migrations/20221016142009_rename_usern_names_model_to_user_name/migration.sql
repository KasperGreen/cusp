/*
  Warnings:

  - You are about to drop the `UserNamesGivenByKasper` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `UserNamesGivenByKasper`;

-- CreateTable
CREATE TABLE `UserNameGivenByKasper` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
