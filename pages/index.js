import Head from 'next/head'
import { useEffect, useState } from "react";
import EventList from "../components/events/events-list";
import { getFeaturedEvents } from "../dummy-data";


export default function Home() {
  const featuredEvents = getFeaturedEvents();
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => setValue(100), 2000);
  });


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
