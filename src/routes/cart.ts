import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'Estas haciendo un get'
    })
})

router.post('/', (req: Request, res: Response) => {
    res.json({
        msg: 'Estas haciendo un post'
    })
})
router.put('/', (req: Request, res: Response) => {
    res.json({
        msg: 'Estas haciendo un put'
    })
})
router.delete('/', (req: Request, res: Response) => {
    res.json({
        msg: 'Estas haciendo un delete'
    })
})

export default router