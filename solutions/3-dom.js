// BEGIN
function editHTML(){
    document.body.innerHTML = document.body.innerHTML.trim().split('\n').map((value) => `<p>${value.trim()}</p>`).join('\n');
}

editHTML();
// END