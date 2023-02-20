import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getMovieCast } from 'services';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        // setStatus(Status.PENDING);
        const castInfo = await getMovieCast(movieId);
        console.log(castInfo);
        // alertOnResolved(images.length, totalImages, page);
        setCast(castInfo);
        // setTotalPages(totalPages);
        // setStatus(Status.RESOLVED);
      } catch (error) {
        // setStatus(Status.REJECTED);
        // alertOnRejected();
        console.log(error);
      }
    };

    getCast();
  }, [movieId]);

  const checkPoster = posterUrl =>
    posterUrl
      ? `https://image.tmdb.org/t/p/w300${posterUrl}`
      : 'https://dummyimage.com/300x450/ccc/fff.jpg&text=No+photo';

  return (
    <>
      {cast && (
        <>
          <h3>Cast</h3>
          <ul>
            {cast.map(({ id, original_name, character, profile_path }) => (
              <li key={id}>
                <img src={checkPoster(profile_path)} alt={original_name} />
                <p>
                  {original_name} - <span>{character}</span>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
