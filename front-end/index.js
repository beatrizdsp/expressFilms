const films = [
  {
    title: "Lord of the Rings: The Fellowship of the Rings",
    rating: 10,
    release_date: 2001,
  },
  {
    title: "Lord of the Rings: The Two Towers",
    rating: 10,
    release_date: 2002,
  },
  {
    title: "Lord of the Rings: The Return of the King",
    rating: 10,
    release_date: 2003,
  },
  {
    title: "Fight Club",
    rating: 9,
    release_date: 1999,
  },
  {
    title: "Toy Story",
    rating: 7,
    release_date: 2004,
  },
  {
    title: "ET",
    rating: 8,
    release_date: 1982,
  },
  {
    title: "Toy Story",
    rating: 9,
    release_date: 1995,
  },
];

function showFilms(){
  const randOptionNum = Math.floor (Math.random()*films.length);

  const parentDiv = document.getElementById('filmList');
  const childDiv = document.createElement('div')
  childDiv.innerHTML = '<p>SeeMe</p>'
  parentDiv.appendChild(childDiv)
}
