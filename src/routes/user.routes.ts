import { Request, Response, Router } from "express"
import { User } from '../entities'

const userRouter = Router()
userRouter
  .get('/', async (req: Request, res: Response) => {
    const users = await User.find()
    res.send(users)
  })
  .post('/', async (req: Request, res: Response) => {
    const user = new User()
    user.username = req.body.username
    user.password = req.body.password

    await user.save()
    res.send(user)
  })

export default userRouter
