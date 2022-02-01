import { Request, Response } from 'express';
import { IProductController, IProductService } from './structure';



export default class ProductController implements IProductController {

    constructor(
        private productService: IProductService
    ){};

    async create(req: Request, res: Response): Promise<void> {

        const { name, bar_code} = req.body

        if(!name || !bar_code){
            res.status(422).json({message: "All required fiels!"})
        }

        const product = await this.productService.create({name, bar_code})

        if(product instanceof Error){
            res.status(409).json(product.message)
        }
        res.status(200).json(product)
    }
}