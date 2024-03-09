/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "NoteBook" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "NoteBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "notebookId" TEXT NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NoteBook" ADD CONSTRAINT "NoteBook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "NoteBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
