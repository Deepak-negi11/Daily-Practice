/*
  Warnings:

  - You are about to drop the column `name` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - Added the required column `delete` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `age` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "name",
DROP COLUMN "userId",
ADD COLUMN     "delete" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "age",
ADD COLUMN     "age" INTEGER NOT NULL;
