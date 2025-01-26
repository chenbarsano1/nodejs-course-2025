// import fs from 'fs'
import fs from 'fs/promises'

// readFile - callback
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// readFile() - async/await
const readFile = async () => {
    try {
      const data = await fs.readFile('./test.txt', 'utf8')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
}

// writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'im writing to this file')
        console.log('File written to...')
    } catch (error) {
        console.log(error)
    }
}

// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nthis is appended text')
    } catch (error) {
        console.log(error)
    }
}

const main = async () => {
    await writeFile()
    await appendFile()
    await readFile()
}
 main()
 