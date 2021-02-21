function validStartingCity(distances, fuel, mpg) {
    const numberOfCities = distances.length;

    for (let startCityIdx = 0; startCityIdx < numberOfCities; startCityIdx++) {
        let milesRemaining = 0;

        for (let currentCityIdx = startCityIdx; currentCityIdx < startCityIdx + numberOfCities; currentCityIdx++) {
            if (milesRemaining < 0) continue;

            const currentCityIdxRotated = currentCityIdx % numberOfCities;

            const fuelFromCurrentCity = fuel[currentCityIdxRotated];
            const distanceToNextCity = distances[currentCityIdxRotated];
            milesRemaining += fuelFromCurrentCity * mpg - distanceToNextCity;
        }

        if (milesRemaining >= 0) return startCityIdx;
    }

    return -1;
}