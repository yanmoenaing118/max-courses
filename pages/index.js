import Head from 'next/head'
import EventList from "../components/events/events-list";
import { getFeaturedEvents } from "../dummy-data";


export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>

      <main>
        <EventList items={featuredEvents} />
      </main>
    </>
  );
}
