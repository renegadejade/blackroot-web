// ./pages/api/character/[id].js
import initAuth from '../../../lib/initAuth'
import { getFirebaseAdmin } from 'next-firebase-auth'

initAuth()
const db = getFirebaseAdmin().firestore()

const handler = async (req, res) => {
  const id = req.query.id
  const method = req.method
  const data = JSON.stringify(req.body, null, 2)

  const doc = await db.collection('characters').doc(id).get()

  try {
  switch (method) {
    case 'GET':
      console.log("got to get")
      
      if (!doc.exists) {
        res.status(404).end(`Character does not exist`);
      }
      else{
        console.log("Returning data...")
      res.status(200).json(doc.data())
      }
      break
    case 'PUT':
      console.log("got to PUT")
      if (!doc.exists) {
        res.status(404).end(`Character does not exist`);
      }
      else{
        const character = JSON.parse(data)
        const res = await db.collection('characters').doc(id).set(character, { merge: true })

      }
      res.status(200).end(`Success`)
      
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)

  }
 } catch (e) {
  return res.status(500).end(e)
}
}

export default handler