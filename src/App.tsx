import React, { useState, useEffect } from "react"
import Listing from "./components/Listing"
import data from "./data.json"
import { Props as IListing } from "./components/Listing"
import Criteria from "./components/Criteria"

function App() {
  const [listingsOriginalCopy, setListingsOriginalCopy] = useState<
    IListing | any
  >([])
  const [listings, setListings] = useState<IListing[]>([])
  const [criteria, setCriteria] = useState<string[]>([])
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null)

  useEffect(() => {}, [selectedKeyword])

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

    if (keyword) {
      setSelectedKeyword(keyword)
    }

    if (filteredCriteria.length < 1) {
      clear()
    } else {
      filteredCriteria.forEach((word) => {
        setListings(
          listingsOriginalCopy.filter((listing) => {
            return listing.keywords.some((kw) => kw === word)
          })
        )
      })
    }
  }

  return (
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
  )
}

export default App
