import { prisma } from '../../PrismaClient';
import { IProductService, IProductRepository, IProduct } from './structure';

export default class ProductService implements IProductService {
    static findAll(id: string) {
        throw new Error('Method not implemented.');
    }

    constructor(
        private productRepository: IProductRepository
    ) { }

    async create(data: IProduct): Promise<any> {
        const { name, bar_code } = data

        const prodcutAlreadyExists = await prisma.product.findFirst({
            where: {
                name:data.name,
            }
        });

        if(prodcutAlreadyExists){
            return Error("Product already exists!")
        }

        const product = await this.productRepository.create({
            name,
            bar_code
        })
        return product;
    };

    async findAll(): Promise<object> {
        const find = await this.productRepository.findAll()
        return find
    };

    async findById(name: string): Promise<any> {

        const find = await this.productRepository.findById(name)

        if(!find) {
            return Error('Produto não encontrado!')
        }
        return find
    }

    async update(id: string, name: string, bar_code: string): Promise<object> {
        const result = await this.productRepository.update(id ,name, bar_code);
        return result
    }

    async delete(id: string): Promise<object> {
        const result = await this.productRepository.delete(id)
        return result
    }

}