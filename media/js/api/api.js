const apicall = function(url, element) {

    let data = fetch(url);

    let box = document.querySelector(element)

    data.then((a) => a.text().then((b) => box.innerHTML = b))

}
