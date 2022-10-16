-- AddForeignKey
ALTER TABLE `Score` ADD CONSTRAINT `Score_givingTelegramUserId_fkey` FOREIGN KEY (`givingTelegramUserId`) REFERENCES `UserNameGivenByKasper`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Score` ADD CONSTRAINT `Score_targetTelegramUserId_fkey` FOREIGN KEY (`targetTelegramUserId`) REFERENCES `UserNameGivenByKasper`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
