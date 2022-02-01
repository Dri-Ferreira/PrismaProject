import { ProductRoutes } from './modules/index';
import { Router } from "express";

const routes = Router()

routes.use('/product', ProductRoutes)

export { routes }