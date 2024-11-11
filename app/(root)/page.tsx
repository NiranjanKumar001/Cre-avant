import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?:string}>
}) {
  const query =(await searchParams).query;

  const posts =[
    {
      _createdAt:"Yesterday",
      views:55,
      author:{_id:1},
      _id:1,
      description:"This is a description",
      image:"https://unsplash.com/photos/close-up-of-a-woman-hacker-hands-at-keyboard-computer-in-the-dark-room-at-night-cyberwar-concept-high-angle-view-YkibINt3MXo",
      category:"Robots",
      title:"We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Pitch your startup to a community of entrepreneurs, investors, and
          industry experts.
        </p>
        <SearchForm  query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query?`Search results for "${query}"`:"All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length>0?(
            posts.map(StartupCardType,number)=>(
              <StartupCard/>
            ))
          ):(
            <p className="no-results">
              No startups found
            </p>
          )}

        </ul>

      </section>
    </>
  );
}
