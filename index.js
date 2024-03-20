function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    if (street >= hqStreet) {
        return street - hqStreet;
    }
    else {
        return hqStreet - street;
    }
}

function distanceFromHqInFeet(street) {
    const blockLengthFeet = 264;
    return distanceFromHqInBlocks(street) * blockLengthFeet;
}

function distanceTravelledInFeet(beginStreet, finishStreet) {
    const blockLengthFeet = 264;
    let distanceBlocks;

    if (beginStreet >= finishStreet) {
        distanceBlocks = beginStreet - finishStreet;
    } else {
        distanceBlocks = finishStreet - beginStreet;
    }

    return distanceBlocks * blockLengthFeet;
}

function calculatesFarePrice(start, destination){
    const baseFareCents = 0; 
    const perFootFareCents = 2;
    const maxDistanceFeet = 2500;

    const distanceFeet = distanceTravelledInFeet(start, destination);

    if (distanceFeet <= 400) {
        return baseFareCents / 100;
    } else if (distanceFeet > 400 && distanceFeet <= 2000) {
        const additionalFeet = distanceFeet - 400;
        const fareCents = baseFareCents + additionalFeet * perFootFareCents;
        return fareCents / 100;
    } else if (distanceFeet > 2000 && distanceFeet <= maxDistanceFeet) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

module.exports = { 
    distanceFromHqInBlocks: distanceFromHqInBlocks,
    distanceFromHqInFeet: distanceFromHqInFeet,
    distanceTravelledInFeet: distanceTravelledInFeet,
    calculatesFarePrice: calculatesFarePrice,
};
