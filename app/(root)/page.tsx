import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "robust" },
      _id: 1,
      description: "This is a description",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw1iWdiSUBxLIX_jE2HAoz1Z&ust=1731508216817000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj7rvSA14kDFQAAAAAdAAAAABAE",
      category: "Robots",
      title: "We Robots",
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
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
