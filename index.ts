import 'reflect-metadata'
import app from "./src/app"
import AppDataSource from './src/db'
const PORT = 3001

async function main() {
  try {
    await AppDataSource.initialize()
    app.listen(PORT, () => {
      console.log('Ready on port:', PORT)
    })
  } catch (error) {
    console.log(error)
  }
}

main()