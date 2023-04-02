import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import Waiting from "./Waiting"
import  { collection, getDocs, getFirestore} from "firebase/firestore"


const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [Wait, setWait] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "guitars");

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(docs);
      setWait(false);
    });
  }, []);

  function show() {
    if (Wait) {
      return <Waiting />;
    } else {
      return <ItemDetail data={products} />
    }
  };

    return (
        <>
        {show()}
        </>
  );
};

export default ItemDetailContainer;
