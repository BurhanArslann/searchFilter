import "./index.css"
import { Users } from "./Data";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("")

const keys = ["first_name","last_name", "email"]

  const search = (data)=>{
    return data.filter((item)=>
      keys.some((key)=> item[key].toLowerCase().includes(query))
    )
  }
  return (
    <div className="app">
      <input type="text"
        placeholder="Search..."
        className="search" 
          onChange={(e) => setQuery(e.target.value)}
        />
     
      <Table Data = {search(Users)} />
    </div>
  )
}

export default App;