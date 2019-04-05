function extractDate(time) {
    return new Date(time);
}

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

module.exports = {
    extractDate:extractDate,
    sameDay:sameDay
};