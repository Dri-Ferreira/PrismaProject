import { prisma } from '../../PrismaClient';

import { IProduct, IProductRepository } from './structure';


export default class ProductRepository implements IProductRepository{

    async create(data: IProduct): Promise<object | Error> {
        const {name, bar_code} = data

        const product = prisma.product.create({
            data:{
                name, bar_code
            }
        })
        return product
    }

   

}