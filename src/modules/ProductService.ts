import { IProductService, IProductRepository, IProduct } from './structure';

export default class ProductService implements IProductService {

    constructor(
        private productRepository: IProductRepository
    ) { }

    async create(data: IProduct): Promise<object | Error> {
        const { name, bar_code } = data

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

    async findById(id: string): Promise<IProduct | Error> {
        const find = await this.productRepository.findById(id)

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