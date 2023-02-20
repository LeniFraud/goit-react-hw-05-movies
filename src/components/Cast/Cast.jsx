import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import { getMovieCast, getPhotoUrl, alertOnError } from 'services';
import { Item } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const castInfo = await getMovieCast(movieId);
        // if (castInfo.length === 0) return;
        setCast(castInfo);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  useEffect(() => {
    if (error) alertOnError();
  }, [error]);

  return (
    <>
      {loading && <Loader />}
      {cast && (
        <ul>
          {cast.map(({ id, original_name, character, profile_path }) => (
            <Item key={id}>
              <img src={getPhotoUrl(profile_path)} alt={original_name} />
              <p>
                <b>{original_name}</b> as <span>"{character}"</span>
              </p>
            </Item>
          ))}
        </ul>
      )}
      {cast?.length === 0 && <p>There is no info about cast.</p>}
    </>
  );
}
