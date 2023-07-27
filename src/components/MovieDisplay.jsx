import React from 'react'

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
function MovieDisplay(props) {
    const loaded = () => {
        return (
            <div>
             <h1>{props.movie.Title}</h1>
             <h1>{props.movie.Year}</h1>
             <h1>Rated: {props.movie.Rated}</h1>
             <hr/>
             <img src={props.movie.Poster} alt={props.movie.Title} />
             <h3>Starring: {props.movie.Actors}</h3>
             <hr/>
             <h2> Awarded: {props.movie.Awards}</h2>
             <hr/>
             <h1>{props.movie.Plot}</h1>
             </div>
          );
        };

        
  //function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return props.movie ? loaded() : loading();
};

    //The component must return some JSX

  
  // We must export the component to use it in other files

export default MovieDisplay