function search() {
    let {value} = document.getElementById("searchInput")

    const baseUrl = "https://google.com/search?q="
    if(!value) value ="https://instagram.com/nur.jaman23/"
    location.replace(baseUrl + value)
}