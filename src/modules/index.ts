import { Router } from "express";

import ProductRepositoryclass from "./ProductRepository";
import ProductControllerclass from "./ProductController";
import ProductServiceclass from "./ProductService";

export const ProductRepository = new ProductRepositoryclass()
export const ProductService = new ProductServiceclass(ProductRepository);
export const ProductController = new ProductControllerclass(ProductService);


export const ProductRoutes = Router()

ProductRoutes.post('/', (req, res) => ProductController.create(req, res))