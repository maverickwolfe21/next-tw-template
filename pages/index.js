import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, setDoc, getDocs, query, doc, orderBy, where, getDoc } from "firebase/firestore";

const Home = () => {
  const collectionRef = collection(db, "quotes");
  const [data, setData] = useState([]);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const quoteDocs = await getDocs(query(collectionRef));
    const quotes = quoteDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setData(quotes);
    setQuote(quotes[randomIndex - 1]);
  };

  if (data.length < 1) {
    return;
  }
  return (
    <div>
      <p>{quote.quote}</p>
    </div>
  );
};

export default Home;
