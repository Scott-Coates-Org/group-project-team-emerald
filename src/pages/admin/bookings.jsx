import FeaturedInfo from 'components/bookings/featuredInfo';
import Info from 'components/bookings/info';

export default function Bookings({ bookings }) {
  return (
    <div>
      <h2>Bookings</h2>
      <FeaturedInfo />
      <Info bookings={bookings} />
    </div>
  );
}
