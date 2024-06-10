import { useEffect, useState } from 'react';
import axios from 'axios';

const APP_ID = import.meta.env.VITE_APP_ID
const APP_KEY = import.meta.env.VITE_APP_KEY

const useRecipes = (querySearch) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!querySearch) {
      setData([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(
          `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${querySearch}&type=public`
        );
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [querySearch]);

  return { data, loading, error };
};

export default useRecipes;
