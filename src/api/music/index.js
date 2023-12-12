import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebase"
const getMusic = async () => {
    const usersRef = collection(db, "music");
    const snapshot = await getDocs(usersRef);
    const users = snapshot.docs.map((doc) => doc.data());
    return users
}

export {
    getMusic
}