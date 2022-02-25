import { Request, Response } from 'express';
import { IProductController, IProductService } from './structure';


export default class ProductController implements IProductController {

    constructor(
        private productService: IProductService
    ) { };

    async create(req: Request, res: Response): Promise<void> {

        const { name, bar_code } = req.body

        if (!name || !bar_code) {
            res.status(422).json({ message: "All required fiels!" })
         }

        const product = await this.productService.create({ name, bar_code })

        
         if(product instanceof Error) {
            res.status(409).json(product.message)
        }

        res.status(200).json(product)
    };

    async findAll(req: Request, res: Response): Promise<void> {
        const find = await this.productService.findAll()
        res.json(find)
    };

    async findById(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const find = await this.productService.findById(id)

        // if(!find) {
        //     res.status(402).json({ msg: 'Parẫmetro id é necessário' })
        // }

        res.status(200).json(find)
    }

    async update(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        const { name, bar_code} = req.body

        const result = await this.productService.update(id ,name, bar_code)
        res.json(result)
    }

    async delete(req: Request, res: Response): Promise<void> {
        const id = req.params.id 
        await this.productService.delete(id)
        
        res.status(201).json({msg: "excluido com sucesso"})
    }
}