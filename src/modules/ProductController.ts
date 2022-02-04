import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
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
    };

    async findAll(req: Request, res: Response): Promise<void>{
        const find = await this.productService.findAll()
        res.json(find)
    };

    async findById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const find = await this.productService.findById(id)
        res.json(find)
    }
}