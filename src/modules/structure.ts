import { Request, Response } from "express";

export interface IProduct {
    id?: String;

    name: string

    bar_code: string;
};

export interface IProductRepository {
    create(data: IProduct): Promise<any>;
    findAll(): Promise<object>
    findById(name: string): Promise<any>
    update(id: string, name: string, bar_code: string): Promise<object>
    delete(id: string): Promise<object>
}

export interface IProductController {
    create(req: Request, res: Response): Promise<void>
    findAll(req: Request, res: Response): Promise<void>
    findById(req: Request, res: Response): Promise<void>
    update(req: Request, res: Response): Promise<void>
    delete(req: Request, res: Response): Promise<void>
}

export interface IProductService {
    create(data: IProduct): Promise<any>
    findAll(): Promise<object>
    findById(name: string): Promise<any>
    update(id: string, name: string, bar_code: string): Promise<object>
    delete(id: string): Promise<object>
}