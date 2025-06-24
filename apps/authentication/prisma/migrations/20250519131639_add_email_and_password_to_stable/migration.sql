-- CreateTable
CREATE TABLE "Stable" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "image_cover" TEXT,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "pilotes" INTEGER NOT NULL DEFAULT 0,
    "how_many_tournaments" INTEGER NOT NULL DEFAULT 0,
    "how_many_wins" INTEGER NOT NULL DEFAULT 0,
    "how_many_losses" INTEGER NOT NULL DEFAULT 0,
    "total_points" INTEGER DEFAULT 0,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pilote" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stableId" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "best_chrono_time" INTEGER NOT NULL,
    "pilote_number" INTEGER NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Pilote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "nb_tours" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participation" (
    "id" TEXT NOT NULL,
    "piloteId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "chrono" INTEGER,
    "position" INTEGER,
    "points" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Participation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participation_piloteId_courseId_key" ON "Participation"("piloteId", "courseId");

-- AddForeignKey
ALTER TABLE "Pilote" ADD CONSTRAINT "Pilote_stableId_fkey" FOREIGN KEY ("stableId") REFERENCES "Stable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_piloteId_fkey" FOREIGN KEY ("piloteId") REFERENCES "Pilote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
