import { prisma } from '../../PrismaClient';
import { IProduct, IProductRepository } from './structure';


export default class ProductRepository implements IProductRepository {

    async create(data: IProduct): Promise<object | Error> {
        const { name, bar_code } = data

        const product = prisma.product.create({
            data: {
                name, bar_code
            }
        })
        return product
    };

    async findAll(): Promise<object> {
        return await prisma.product.findMany()
    };

    async findById(id: string): Promise<object | any> {
        const findById = await prisma.product.findUnique({where: {id: id}})

        return findById
    }

    async update(id: string, name: string, bar_code: string): Promise<object> {
        const result = await prisma.product.update(
            {
                where: {
                  id: id,
                },
                data: {
                  name: name,
                  bar_code: bar_code
                },
              }
        )
        return result

    }

    async delete (id: string): Promise < object > {
    const result = await prisma.product.delete({ where: { id } })

        return result

    }
}