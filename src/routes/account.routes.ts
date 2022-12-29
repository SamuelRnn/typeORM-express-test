import { Router, Response, Request } from "express"

const accountRouter = Router()
accountRouter
  .get('/', (req: Request, res: Response) => {
    res.send('Hello from /account')
  })

export default accountRouter