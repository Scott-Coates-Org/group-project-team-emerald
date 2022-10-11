import FeaturedInfo from 'components/bookings/featuredInfo';
import Info from 'components/bookings/info';

import { useEffect, useState } from 'react';
import { getCollection } from 'utils/firebase';

export default function Bookings() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const bookings = await getCollection('bookings');
      setRows(bookings);
    }

    fetchData();
  }, []);
  if (!rows.length) return <div>Loading...</div>;
  return (
    <div>
      <h2>Bookings</h2>
      <FeaturedInfo />
      <Info bookings={rows} />
    </div>
  );
}
