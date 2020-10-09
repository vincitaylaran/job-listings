import React, { useState, useEffect } from "react"
import Listing from "./components/Listing"
import data from "./data.json"
import { Props as IListing } from "./components/Listing"
import Criteria from "./components/Criteria"
import Header from "./components/Header"

function App() {
  const [listingsOriginalCopy, setListingsOriginalCopy] = useState<
    IListing | any
  >([])
  const [listings, setListings] = useState<IListing[]>([])
  const [criteria, setCriteria] = useState<string[]>([])


  useEffect(() => {

    const listingsCopy = JSON.parse(JSON.stringify(data))

    const listingsWithKeywords = listingsCopy.map((listing) => {
      const keywords = [
        listing.role,
        listing.level,
        ...listing.languages.map((language) => language),
        ...listing.tools.map((tool) => tool),
      ]
      return {
        ...listing,
        keywords,
        isNew: listing.new,
        isFeatured: listing.featured,
      }
    })

    setListingsOriginalCopy(listingsWithKeywords)
    setListings(listingsWithKeywords)
  }, [])

  const filter = (keyword?: string): void => {
    if (keyword) {
      const keywordLowercase = keyword.toLowerCase()
      if (!criteria.some((word) => word === keyword)) {
        setCriteria([...criteria, keyword]) // I don't push keywordLowercase because I want the text in the components that will render the criteria array to have the original casing.

        setListings(
          listings.filter((listing) => {
            return listing.keywords.some(
              (word) => word.toLowerCase() === keywordLowercase
            )
          })
        )
      }
    }
  }

  const clear = (): void => {
    const originalListings: IListing[] = listingsOriginalCopy
    setListings(originalListings)
    setCriteria([])
  }

  const remove = (keyword?: string): void => {
    const filteredCriteria = [...criteria].filter((word) => word !== keyword)
    setCriteria(filteredCriteria)

    if (filteredCriteria.length < 1) {
      clear()
    } else {
      const filteredListings = listingsOriginalCopy.filter((listing) => {

        // check if the "keywords" array property is a superset of "filteredCriteria".
        return filteredCriteria.every((word) => listing.keywords.includes(word))
      })        
      setListings(filteredListings)
    }
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        <Criteria keywords={criteria} onClear={clear} onRemove={remove} />
        {listings.map((listing) => (
          <Listing
            {...listing}
            key={listing.id}
            onKeyword={filter}
            isNew={listing.isNew}
            isFeatured={listing.isFeatured}
          />
        ))}
      </main>
    </React.Fragment>
  )
}

export default App
