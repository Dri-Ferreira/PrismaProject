import { prisma } from '../../PrismaClient';
import { IProduct, IProductRepository } from './structure';


export default class ProductRepository implements IProductRepository {
    static findAll: jest.Mock<any, any>;
    static create: jest.Mock<any, any>;

    async create(data: IProduct): Promise<any> {
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

    async findById(name: string):Promise<any>{
        return await prisma.product.findFirst({where: { name } })

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