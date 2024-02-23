-- CreateTable
CREATE TABLE `Login` (
    `id_login` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` CHAR(200) NOT NULL,
    `senha` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `Login_usuario_key`(`usuario`),
    PRIMARY KEY (`id_login`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
