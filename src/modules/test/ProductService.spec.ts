import { ProductRepository } from './../index';


describe('teste service', () => {
    it('should return create product', async () => {
        const create = ProductRepository.create = jest.fn();

        const product = {
            "id": "d2004d10-64b5-432f-a4ce-b2e98010481e",
            "name": "mouse pad",
            "bar_code": "123654"
        }
        create.mockReturnValue(product)

        const result = await ProductRepository.create(product)
        expect(result).toBe(product)
    });

    it('should return create already exist', async() => {
        
    })
})