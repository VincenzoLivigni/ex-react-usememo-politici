import { useEffect, useState } from "react"

function App() {

  const [politicians, setPoliticians] = useState([])

  const loadPoliticians = async () => {
    const res = await fetch("http://localhost:3333/politicians")
    const data = await res.json()
    setPoliticians(data)
  }

  useEffect(() => {
    loadPoliticians()
  }, [])

  return (
    <>
      <header>
        <h1 className="text-center py-3">List of politicians</h1>
      </header>

      <main className="bg-light">
        <div className="container">
          <div className="row row-cols-4">
            {
              politicians.map((p) => (
                <div key={p.id} className="col d-flex">
                  <div className="card my-5 flex-fill rounded-4">
                    <img src={p.image} className="rounded-4 rounded-bottom-0" />
                    <div className="card-body">
                      <p>
                        <strong>Name:</strong> <span>{p.name}</span>
                      </p>
                      <p>
                        <strong>Position:</strong> <span>{p.position}</span>
                      </p>
                      <p>
                        <strong>Biography:</strong> <span>{p.biography}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
