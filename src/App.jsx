import { useEffect, useMemo, useState } from "react"
import Card from "../components/Card"

function App() {

  const [politicians, setPoliticians] = useState([])

  const [search, setSearch] = useState("")
  const [selectedPosition, setSelectedPosition] = useState("")

  useEffect(() => {
    const loadPoliticians = async () => {
      const res = await fetch("http://localhost:3333/politicians")
      const data = await res.json()
      setPoliticians(data)
    }
    loadPoliticians()
  }, [])

  const positions = useMemo(() => {
    const uniquePositions = []

    politicians.forEach((p) => {
      if (!uniquePositions.includes(p.position)) {
        uniquePositions.push(p.position)
      }
    })

    return uniquePositions
  }, [politicians])

  const politiciansFiltered = useMemo(() => {

    return politicians.filter((p) => {

      const isPositionValid = selectedPosition === "" || selectedPosition === p.position

      return (
        (p.name.toLowerCase().includes(search.toLowerCase()) || p.biography.toLowerCase().includes(search.toLowerCase())) &&
        isPositionValid
      )
    })
  }, [politicians, search, selectedPosition])

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

          <select
            className="ms-3 rounded-3"
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}>

            <option value="">Filtra per posizione</option>
            {positions.map((p, index) => (
              <option key={index} value={p}>{p}</option>
            ))}
          </select>

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
