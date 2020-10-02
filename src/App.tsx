import React from "react"
import Listing from "./components/Listing"

// <Header />
// <Criteria />
// data.map(listing => <Listing {...listing} />)

function App() {
  return (
    <main>
      <Listing>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam
          sint, nostrum reprehenderit qui officia tenetur, blanditiis molestiae
          quasi nemo ex quas labore accusantium magni iure ipsam, fugit ratione
          excepturi!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam
          sint, nostrum reprehenderit qui officia tenetur, blanditiis molestiae
          quasi nemo ex quas labore accusantium magni iure ipsam, fugit ratione
          excepturi!
        </div>
      </Listing>
    </main>
  )
}

export default App
