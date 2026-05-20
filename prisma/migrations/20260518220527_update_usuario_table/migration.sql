/*
  Warnings:

  - You are about to drop the `lojas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `endereco` to the `Loja` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_usuario_id_fkey";

-- AlterTable
ALTER TABLE "Loja" ADD COLUMN     "endereco" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "lojas";

-- DropTable
DROP TABLE "usuarios";
