function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective(type = "*") {
    return function (adjective = "special") {
        return `You are ${type}${adjective}${type}!`;
    }
}
wrapAdjective()();