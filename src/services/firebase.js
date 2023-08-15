
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCtwIBHy7FDVPjd8wciwQ3cq-R1bIQWvjQ",
  authDomain: "react-coder-610a4.firebaseapp.com",
  projectId: "react-coder-610a4",
  storageBucket: "react-coder-610a4.appspot.com",
  messagingSenderId: "92519822397",
  appId: "1:92519822397:web:04760cc7699a4e22636654"
};


const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);



async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
  );
  return docsData;
}
async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

async function getCategoryData() {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("price", ">=", 200));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return(docCreated.id)
}


async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}


async function _exportProducts(){
  const productos = [
    {
      title: "Dragon Blanco de Ojos Azules",
      id: 1,
      stock: 3,
      img: "/assets/dragon.bmp",
      price: 300,
      category: "comunes",
    },
    {
      title: "Mago Oscuro",
      id: 2,
      stock: 8,
      img: "/assets/mago.bmp",
      price: 300,
      category: "comunes",
    },
    {
      title: "Exodia, el Prohibido",
      id: 3,
      stock: 3,
      img: "/assets/exodia.bmp",
      price: 750,
      category: "raras",
    },
    {
      title: "Dragón Metálico de Oscuridad",
      id: 4,
      stock: 2,
      img: "/assets/dragonO.bmp",
      price: 750,
      category: "raras",
    },
    {
      title: "Soldado del Brillo Negro",
      id: 5,
      stock: 5,
      img: "/assets/soldado.bmp",
      price: 750,
      category:"raras",
    },
    {
      title: "Hada Arcoíris",
      id: 6,
      stock: 8,
      img: "/assets/hada.bmp",
      price: 1000,
      category:"muy-raras",
    },
    {
      title: "Cabeza Exodia",
      id: 7,
      stock: 3,
      img: "/assets/cabezaE.bmp",
      price: 1000,
      category:"muy-raras",
    },
  ];

  for(let item of productos){   
    const collectionRef = collection(db, "products")
    const docCreated = await addDoc(collectionRef, item);
    console.log("Doc created with id:", docCreated.id)
  }
}


async function _exportProductsWithBatch(){
  const productos = [
    {
      title: "Dragon Blanco de Ojos Azules",
      id: 1,
      stock: 3,
      img: "/assets/dragon.bmp",
      price: 300,
      category: "comunes",
    },
    {
      title: "Mago Oscuro",
      id: 2,
      stock: 8,
      img: "/assets/mago.bmp",
      price: 200,
      category: "comunes",
    },
    {
      title: "Exodia, el Prohibido",
      id: 3,
      stock: 3,
      img: "/assets/exodia.bmp",
      price: 150,
      category: "raras",
    },
    {
      title: "Dragón Metálico de Oscuridad",
      id: 4,
      stock: 2,
      img: "/assets/dragonO.bmp",
      price: 150,
      category: "raras",
    },
    {
      title: "Soldado del Brillo Negro",
      id: 5,
      stock: 5,
      img: "/assets/soldado.bmp",
      price: 50,
      category:"raras",
    },
    {
      title: "Hada Arcoíris",
      id: 6,
      stock: 8,
      img: "/assets/hada.bmp",
      price: 700,
      category:"muy-raras",
    },
    {
      title: "Cabeza Exodia",
      id: 7,
      stock: 3,
      img: "/assets/cabezaE.bmp",
      price: 250,
      category:"muy-raras",
    },
  ];



  const batch = writeBatch(db); 

  productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "products", `1${newId}`)
    batch.set(newDoc, producto);    
  })

  const data = await batch.commit()  
  console.log("Listo!", data)
}

export { getData, getOrder, getProductData, getCategoryData, createOrder, _exportProducts, _exportProductsWithBatch};
