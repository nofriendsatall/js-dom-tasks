// BEGIN
export default function (htmlElement) {
    const divs = htmlElement.querySelectorAll('div');

    divs.forEach((div) => {
        const childNodes = Array.from(div.childNodes);

        childNodes.forEach((node) => {
            if (node instanceof Text && node.textContent.trim().length !== 0) {
                const p = document.createElement('p');
                p.textContent = node.textContent.trim();
                node.replaceWith(p);
            }
        });
    });
}
// END
