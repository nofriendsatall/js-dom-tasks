// BEGIN
export default function (docElem) {
    const paragraphs = docElem.getElementsByTagName("p");

    const result = []

    for (const p of paragraphs) {
        result.push(p.innerHTML.trim())
    }

    return result
}
// END