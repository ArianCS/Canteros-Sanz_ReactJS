import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./ItemList";
import Waiting from "./Waiting"
import { useParams, Link } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [ Wait, setWait] = useState(true);

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

  const Filter = products.filter(
    (product) => product.category === category);
  

    function show() {
      if (Wait) {
        return <Waiting />;
      } else {
        return category ? (
          <ItemList product={Filter} />
        ) : (
          <ItemList product={products} />
        );
      }
    }

  function link() {
    if (category != null) {
      return ('');
    }};

  return (
    <div>
      {link()}
      {{ category } ? (
        <Link>{''}</Link>
      ) : ( {} )}
    <div>
      {show()}
    </div>
    </div>
  );
};

export default ItemListContainer