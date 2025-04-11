"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [token,setToken] = useState("");

  useEffect(()=>{
    const t = localStorage.getItem('jwtToken');
    if(t == null) return;
    console.log(t)
    axios.get("http://localhost:8080/authenticated",{
      headers:{
        Authorization:"Bearer " + t
      }
    }).then((res)=>{setToken(res.data)})
  },[])

  return <div>
    hellow + {token}
  </div>;
}
