import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getMovieReviews } from 'services';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        // setStatus(Status.PENDING);
        const reviewsInfo = await getMovieReviews(movieId);
        console.log(reviewsInfo);
        // alertOnResolved(images.length, totalImages, page);
        setReviews(reviewsInfo);
        // setTotalPages(totalPages);
        // setStatus(Status.RESOLVED);
      } catch (error) {
        // setStatus(Status.REJECTED);
        // alertOnRejected();
        console.log(error);
      }
    };

    getReviews();
  }, [movieId]);

  const checkPoster = posterUrl =>
    posterUrl && !posterUrl.includes('http')
      ? `https://image.tmdb.org/t/p/w45${posterUrl}`
      : 'https://dummyimage.com/45x45/ccc/fff.jpg&text=M';

  return (
    <>
      {reviews && (
        <>
          <h3>Reviews</h3>
          <ul>
            {reviews.map(
              ({
                id,
                author,
                author_details: { avatar_path },
                content,
                created_at,
              }) => (
                <li key={id}>
                  <img src={checkPoster(avatar_path)} alt={author} />
                  <p>
                    {author}
                    <span> {new Date(created_at).toLocaleDateString()}</span>
                  </p>
                  <p>{content}</p>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </>
  );
};
