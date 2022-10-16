-- CreateTable
CREATE TABLE `Score` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` INTEGER NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `targetTelegramUserId` INTEGER NOT NULL,
    `givingTelegramUserId` INTEGER NOT NULL,
    `telegramChatId` INTEGER NOT NULL,
    `telegramMessageJson` JSON NOT NULL,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedDate` DATETIME(3) NOT NULL,

    INDEX `Score_telegramChatId_targetTelegramUserId_givingTelegramUser_idx`(`telegramChatId`, `targetTelegramUserId`, `givingTelegramUserId`, `createdDate` DESC),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserNamesGivenByKasper` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
