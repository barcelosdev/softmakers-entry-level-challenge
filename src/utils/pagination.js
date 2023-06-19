exports.handleLimit = (limit, total) => {
    const data = isNaN(limit) || !limit ? 10 : Number.parseInt(limit)

    if (data < 1) {
        return 1;
    } else if (data > 100) {
        return 100;
    } else if (data > total && total < 100) {
        return total;
    } else {
        return data;
    }
}

exports.handleOffset = (offset, limit) => {
    return isNaN(offset) || !offset || offset < -1 ? 0 : (parseInt(offset) - 1) * limit;
}
