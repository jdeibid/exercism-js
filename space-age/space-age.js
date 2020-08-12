export const age = (planet, unformatedAge) => {
  const earthPeriod = 31557600
  const orbitalPeriods = {
    "mercury": 0.2408467*earthPeriod,
    "venus": 0.61519726*earthPeriod,
    "earth": 31557600,
    "mars": 1.8808158*earthPeriod,
    "jupiter":11.862615*earthPeriod,
    "saturn": 29.447498*earthPeriod,
    "uranus": 84.016846*earthPeriod,
    "neptune": 164.79132*earthPeriod
  }
  return parseFloat((unformatedAge/orbitalPeriods[planet]).toFixed(2))
};