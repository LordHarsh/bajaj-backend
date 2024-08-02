import { Request, Response } from "express";
import { bfhl } from "./service";

export const handle_post_bfhl = (req: Request, res: Response) => {
    try {
        const { data } = req.body;
        const response = bfhl(data);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const handle_get_bfhl = (req: Request, res: Response) => {
    try {
        res.status(200).send({ operation_code: 1 });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};