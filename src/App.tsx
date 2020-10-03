import React, { useState, useEffect } from "react"
import Listing from "./components/Listing"
import data from "./data.json"
import { Props as IListing } from "./components/Listing"

// <Header />
// <Criteria />
// data.map(listing => <Listing {...listing} />)

function App() {
  const [listings, setListings] = useState<IListing[]>([])

  useEffect(() => {
    function createListings(): IListing[] {
      const listings: IListing[] = data.map((listing) => {
        return {
          ...listing,
          logo: `../Icons/${listing.company}`,
          isNew: listing.new, // TODO: find a way to override Object prototype "new" keyword
          isFeatured: listing.featured,
          keywords: [
            listing.role,
            listing.level,
            ...listing.languages,
            ...listing.tools,
          ],
        }
      })

      return listings
    }

    setListings(createListings())
  }, [])

  return (
    <main>
      {listings.map((listing) => (
        <Listing {...listing} />
      ))}
    </main>
  )
}

export default App
