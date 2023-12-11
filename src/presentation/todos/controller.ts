import { Request, Response } from "express";

export class TodoController {
    //* DI 
    constructor(){};

    public getTodos = (req: Request, res: Response) => {
        res.json([
            { id:1, text: 'Buy milk', createdAt: new Date() },
            { id:2, text: 'Buy milzcxczxk', createdAt: null },
            { id:3, text: 'Buy milkzccz', createdAt: new Date() },
            { id:4, text: 'Buy milkzczc', createdAt: new Date() },
        ]);
    };
}