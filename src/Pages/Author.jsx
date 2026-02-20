import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import { GET_POSTS } from "../GRAPHQL/queries";
import { Link } from "react-router-dom";
import BlogSection from "../component/BlogSection";

function Author() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const authors = data.posts.map((post) => post.author);
  const uniqueAuthors = Array.from(
    new Map(authors.map((author) => [author.id, author])).values()
  );

  const author = uniqueAuthors.find((a) => a.slug === slug);

  if (!author) return <p>Author not found</p>;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center text-center ">
        <h1 className="text-3xl font-semibold text-blue-500 mb-4">{author.name}</h1>
        
        {/* Image Styling */}
        <img
          src={author.avatar?.url}
          alt={author.name}
          className="w-36 h-36 rounded-full border-4 border-blue-500 object-cover mb-6 transition duration-300 transform hover:scale-105"
        />
        
        <div
          className="prose text-right max-w-full"
          dangerouslySetInnerHTML={{ __html: author.description.html }}
        />
      </div>

      <div className="mt-10">
        <h1 className="text-right text-xl font-bold mb-6 text-gray-800">مقالات نویسنده</h1>
        <BlogSection data={data} lastOnes={2} name={author.name} />
      </div>

      <div className="text-center mt-8">
        <Link to="/">
          <button className="px-6 py-2 bg-white text-blue-500 border-2 border-blue-500 rounded-lg hover:!bg-blue-500 hover:text-white transition duration-300">
            بازگشت
          </button>
        </Link>
      </div>
    </>
  );
}

export default Author;