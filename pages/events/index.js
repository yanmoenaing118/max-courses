import EventSearch from "../../components/events/event-search";
import EventList from "../../components/events/events-list";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

export default function EventPage() {
  const events = getAllEvents();
  const router = useRouter();
  const handleSearch = (year, month) => {
    console.log(year, month);

    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventSearch onSearch={handleSearch} />
      <EventList items={events} />
    </>
  );
}
