import { prisma } from '../../../PrismaClient';
import ProductRepository from '../ProductRepository';
import ProductService from '../ProductService';
import ProductController from '../ProductController'

const createSut = () => {
    const productRepository = new ProductRepository()
    const sut = new ProductService(productRepository)
    return sut
}

describe('teste service', () => {
    // const productRepository = new ProductRepository()
    // const productService = new ProductService(productRepository)
    // const productController= new ProductController(productService)
    
    it.only('should return if the product already exists', async () => {
        const productRepository = new ProductRepository()
        const sut = new ProductService(productRepository)

        const create = productRepository.create = jest.fn()
        const product = {
            "id": "ba621088-5646-418a-9875-8e1a7e1b0a99",
	        "name": "mouse pad",
	        "bar_code": "123654"
        }

        create.mockReturnValue(create)
        const res = await sut.create(product)
        expect(res.message).toEqual('Product already exists!')
    });

    it.only('should return if the product id', async() => {
        const productRepository = new ProductRepository()
        const sut = new ProductService(productRepository)

        const prodcutID = productRepository.findById = jest.fn()

        const product = {
            "id": "ba621088-5646-418a-9875-8e1a7e1b0a99",
	        "name": "mouse pad",
	        "bar_code": "123654"
        }
        
        prodcutID.mockReturnValue(product.name)

        const result = sut.findById("mouse pad")

        console.log(result)

        expect(result).toBe('Produto não encontrado!')
    })
})