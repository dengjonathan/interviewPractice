movieLists.concatMap(movieList => movieList.concatMap(movie =>
  movie.boxarts.reduce((smallest, ea) => {
    if(ea.width * ea.height < smallest.width * smallest.height) {
      return ea;
    }
    return smallest
  });
  .map(boxart => ({
    id: movie.id,
    title: movie.title,
    boxart: boxart.url
  }))
));