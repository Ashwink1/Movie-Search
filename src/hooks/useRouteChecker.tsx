import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useRouteChecker() {
  const [pathname, setPathname] = useState<string>(window.location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    const handleRouteChange = (newLocation) => {
      // Update the state with the new pathname
      setPathname(newLocation.pathname);
    };

    // Listen to location changes using useEffect
    navigate(handleRouteChange);
  }, [navigate]);

  // Expose a function to check if the route contains a specific string
  function checkRouteContains(targetString: string): boolean {
    return pathname.includes(targetString);
  }

  // Expose a function to find the matching string from an array of strings
  function findMatchingRoute(strings: string[]): string | null {
    const matchingString = strings.find((str) => pathname.includes(str));
    return matchingString || null;
  }

  return { checkRouteContains, findMatchingRoute };
}

export default useRouteChecker;
