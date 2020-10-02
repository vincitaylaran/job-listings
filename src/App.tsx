import React from "react"
import Listing from "./components/Listing"

// <Header />
// <Criteria />
// data.map(listing => <Listing {...listing} />)

const listing = {
  id: 1,
  company: "Photosnap",
  logo: "../../images/photosnap.svg",
  new: true,
  featured: true,
  position: "Senior Frontend Developer",
  role: "Frontend",
  level: "Senior",
  postedAt: "1d ago",
  contract: "Full Time",
  location: "USA Only",
  languages: ["HTML", "CSS", "JavaScript"],
  tools: ["React"],
  keywords: ["Frontend", "Senior", "HTML", "CSS", "JavaScript", "React"],
}

function App() {
  return (
    <main>
      <Listing {...listing} isNew={listing.new} isFeatured={listing.featured} />
    </main>
  )
}

export default App
