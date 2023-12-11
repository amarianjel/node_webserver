import { Router } from "express";

export class AppRoutes{
    static get routes(): Router{
        const router = Router();

        router.get('/api/todos', (req, res) => {
            res.json([
                { id:1, text: 'Buy milk', createdAt: new Date() },
                { id:2, text: 'Buy milzcxczxk', createdAt: null },
                { id:3, text: 'Buy milkzccz', createdAt: new Date() },
                { id:4, text: 'Buy milkzczc', createdAt: new Date() },
            ]);
        });

        return router;
    }
}