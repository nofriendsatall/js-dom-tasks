import camelCase from 'lodash/camelCase';

// BEGIN
export default function (htmlElement) {
    const elements = htmlElement.body.getElementsByTagName('*');

    for (let element of elements) {
        for (let className of element.classList)
            element.classList.replace(className, camelCase(className));
    }

    


}
// END