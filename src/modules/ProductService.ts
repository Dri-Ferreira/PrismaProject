import { IProductService, IProductRepository, IProduct } from './structure';


export default class ProductService implements IProductService {

    constructor(
        private productRepository: IProductRepository
    ){}

    async create(data: IProduct): Promise<object | Error> {
        
        const { name, bar_code} = data

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

    async findById(id: string): Promise<object> {
        const find = await this.productRepository.findById(id)
        return find
    }
    

}