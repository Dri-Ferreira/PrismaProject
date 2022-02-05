import { Request, Response } from "express";

export interface IProduct {
    id?: String;

    name: string

    bar_code: number;
};

export interface IProductRepository {
    create(data:IProduct): Promise<object | Error>;
    findAll(): Promise<object>
    findById(id: string): Promise<object | Error>
}

export interface IProductController {
    create(req: Request, res: Response): Promise<void>
    findAll(req: Request, res: Response): Promise<void>
    findById(req: Request, res: Response): Promise<void>
}

export interface IProductService {
    create(data:IProduct): Promise<object | Error>
    findAll(): Promise<object>
    findById(id:string): Promise<object | Error>
}