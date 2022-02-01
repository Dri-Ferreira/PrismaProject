-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bar_code" DECIMAL(65,30) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_bar_code_key" ON "product"("bar_code");

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_id_fkey" FOREIGN KEY ("id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
