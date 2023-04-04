function searchGoogle() {
    const query = document.getElementById('search-input').value;
    window.open(`https://www.google.com/search?q=${query}`,'_blank');
}

function searchScholar() {
  const query = document.getElementById('search-input').value;
  window.open(`https://scholar.google.com/scholar?q=${query}`,'_blank');
}

function searchYoutube() {
  const query = document.getElementById('search-input').value;
  window.open(`https://www.youtube.com/results?search_query=${query}`,'_blank');
}

function searchOverflow(){
  const query =document.getElementById('search-input').value;
  window.open(`https://stackoverflow.com/search?q=${query}`,'_blank');
}

function searchQuora(){
  const query= document.getElementById('search-input').value;
  window.open(`https://quora.com/search?q=${query}`,'_blank');
}

// function searchW3(){
//   const query=document.getElementById("search-input").value;
//   window.open(`https://www.w3schools.com/#gsc.tab=0&gsc.q=${query}`,'_blank');
// }