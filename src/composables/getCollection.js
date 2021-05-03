import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

  collectionRef.onSnapshot(() => {
    let results = []
    snap.docs.ForEach(() => {
      // Right is executed only when left is true
      doc.data().createdAt && result.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    documents.value = nullerror.value = 'could not fetch data'
  })

  return { documents, error }
}

export default getCollection