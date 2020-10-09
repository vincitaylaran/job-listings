import React, { useState, useEffect } from "react"
import BgHeaderDesktop from "../icons/BgHeaderDesktop"
import BgHeaderMobile from "../icons/BgHeaderMobile"
import styled from "styled-components"

interface Window {
  width: number | undefined
  height: number | undefined
}

// hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Window>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

const StyledDesktopHeader = styled(BgHeaderDesktop)`
  width: 100%;
  height: 156px;
  background-color: #5ca5a5;
  z-index: -1;
`

const StyledMobileHeader = styled(BgHeaderMobile)`
  width: 100%;
  height: 156px;
  background-color: #5ca5a5;
  z-index: -1;
`

const Header: React.FC = () => {
  const viewport = useWindowSize()
  const [breakpoint] = useState({
    desktop: 1440,
    laptop: 1024,
    tablet: 768,
    mobile: 425,
  })

  const isWiderThanTablet = (viewportWidth: number): boolean => {
    if (viewport) {
      return viewportWidth >= breakpoint.tablet
    }
    return false
  }

  return (
    <div>
      {isWiderThanTablet(viewport.width!) ? (
        <StyledDesktopHeader />
      ) : (
        <StyledMobileHeader />
      )}
    </div>
  )
}

export default Header
