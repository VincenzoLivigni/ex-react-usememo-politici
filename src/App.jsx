import { useEffect, useMemo, useState } from "react"
import Card from "../components/Card"

function App() {

  const [politicians, setPoliticians] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    const loadPoliticians = async () => {
      const res = await fetch("http://localhost:3333/politicians")
      const data = await res.json()
      setPoliticians(data)
    }
    loadPoliticians()
  }, [])

  const politiciansFiltered = useMemo(() => {
    return politicians.filter((p) => (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.biography.toLowerCase().includes(search.toLowerCase())
    ))
  }, [politicians, search])

  return (
    <>
      <header>
        <h1 className="text-center py-3">List of politicians</h1>
      </header>

      <main className="bg-light">
        <div className="container">
          <input className="mt-5 rounded-3"
            type="text"
            placeholder=" Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="row row-cols-4">
            {
              politiciansFiltered.map((p) => (
                <Card
                  key={p.id}
                  p={p}
                />
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
