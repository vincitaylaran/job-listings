import React, { useState, useEffect } from "react"
import Listing from "./components/Listing"
import data from "./data.json"
import { Props as IListing } from "./components/Listing"
import Criteria from "./components/Criteria"

function App() {
  const [listings, setListings] = useState<IListing[]>([])
  const [criteria, setCriteria] = useState<string[]>([])
  const [selectedKeyword, setSelectedKeyword] = useState<string>()

  useEffect(() => {
    const listingsCopy = JSON.parse(JSON.stringify(data))

    let listingsWithKeywords = listingsCopy.map((listing) => {
      const keywords = [
        listing.role,
        listing.level,
        ...listing.languages.map((language) => language),
        ...listing.tools.map((tool) => tool),
      ]
      return { ...listing, keywords }
    })

    setListings(listingsWithKeywords)
  }, [])

  const filter = (keyword?: string) => {
    console.log("Listings before filter -> ", listings)
    if (keyword) {
      const keywordLowercase = keyword.toLowerCase()
      // I don't push keywordLowercase because I want the text in the components that will render the criteria array to have the original casing.
      const criteriaCopy: string[] = [...criteria]
      criteriaCopy.push(keyword)
      setCriteria(criteriaCopy)

      console.log("criteria -> ", criteria)

      console.log(`keywordLowercase -> ${keywordLowercase}`)
      setSelectedKeyword("keywordLowercase")
      console.log(`selectedKeyword -> ${selectedKeyword}`)
      setListings(
        listings.filter((listing) => {
          return listing.keywords.some((word) => word === selectedKeyword)
        })
      )
      console.log("Listings after filter -> ", listings)
    }
  }

  return (
    <main>
      <Criteria />
      {listings.map((listing) => (
        <Listing {...listing} key={listing.id} onKeyword={filter} />
      ))}
    </main>
  )
}

export default App
