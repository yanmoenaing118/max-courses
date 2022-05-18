import { useRouter } from "next/router";
import EventList from "../../components/events/events-list";
import { getFilteredEvents } from "../../dummy-data";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">loading</p>;
  }

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (isNaN(numYear) || isNaN(numMonth)) {
    return <p>Invalid Fitlters.</p>;
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  console.log(events);

  if(!events || events.length === 0 ) {
    return <p>No events found for the chosen filters.</p>
  }
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
