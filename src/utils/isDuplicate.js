const isDuplicateInList = (list, str) => {
    let isDuplicate = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() === str.toLowerCase()) {
            isDuplicate = true;
            break;
        }
    }

    return isDuplicate;
}

export default isDuplicateInList;