function getElementWidth (content, padding, border) {
    const totalSize = Number.parseInt(content + padding ** 2 + border ** 2);
    return totalSize;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));