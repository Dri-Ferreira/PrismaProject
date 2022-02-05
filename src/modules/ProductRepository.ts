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
    };

   async findAll(): Promise<object>{
       return await prisma.product.findMany()
   };

   async findById(id: string): Promise<object | Error>{
    const findById = await prisma.product.findUnique({ where: { id } })
    if(!findById) {
        return new Error('Produto não encontrado!')
    }
    return findById
   }

}