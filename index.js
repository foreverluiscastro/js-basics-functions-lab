// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42);
}

function distanceFromHqInFeet(pickUp) {
    return Math.abs(pickUp - 42) * 264;
}

function distanceTravelledInFeet(pickUp, dropOff) {
    return Math.abs(pickUp - dropOff) * 264;
}

function calculatesFarePrice(pickUp, dropOff) {
    if ((Math.abs(pickUp - dropOff) * 264) < 400) {
        return 0;
    } else if ((Math.abs(pickUp - dropOff) * 264) > 2500) {
        return `cannot travel that far`;
    } else if ((Math.abs(pickUp - dropOff) * 264) < 2000) {
        return ((Math.abs(pickUp - dropOff) * 264) - 400)* .02;
    } else if ((Math.abs(pickUp - dropOff) * 264) > 2000) {
        return 25;
    }

}
