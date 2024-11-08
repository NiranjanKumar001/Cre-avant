import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default function Home() {
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
        <SearchForm />
      </section>
    </>
  );
}
