import { useQuery } from "@apollo/client/react";
import { Link, useParams } from "react-router-dom";
import { GET_POSTS } from "../GRAPHQL/queries";
import BlogSection from "../component/BlogSection";
import ShowComments from "../component/ShowComments";
import AddComponent from "../component/AddComponent";

function Post() {
  const { slug } = useParams();
  const { error, loading, data } = useQuery(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const findPost = data?.posts?.find(
    (post) => post.slug === slug
  );

  if (!findPost) return <p>Post not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-blue-500 text-right mb-8 text-3xl font-semibold">{findPost.title}</h1>
      
      {/* Image Styling */}
      <img 
        src={findPost.coverImage[0]?.url} 
        alt={findPost.title} 
        className="w-full h-auto rounded-lg shadow-lg object-cover mb-8" 
      />
      
      {/* Content Section */}
      <div 
        className="mt-8 prose lg:prose-lg text-right"
        dangerouslySetInnerHTML={{ __html: findPost.content.html }} 
      />
      
      {/* Blog Section */}
      <h1 className="text-right text-xl font-bold text-gray-700 mt-8 mb-4">مقالات</h1>
      <BlogSection data={data} lastOnes={0} name={null} />
      
      {/* Comments Section */}
      {findPost.comments && findPost.comments.length > 0 ? (
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4 text-blue-500 text-right">فرم ارسال کامنت ها</h2>
          <AddComponent findPost={findPost} />
          
          <h2 className="text-lg font-bold mb-4 text-blue-500 text-right">کامنت ها</h2>
          {findPost.comments.map((comment) => (
            <ShowComments key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <h1 className="text-center text-gray-500">کامنتی وجود ندارد</h1>
      )}

      {/* Back Button */}
      <div className="mt-8 text-center">
        <Link to="/">
          <button className="px-6 py-2 bg-white text-blue-500 border-2 border-blue-500 rounded-lg hover:!bg-blue-500 hover:text-white transition duration-300">
            بازگشت
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Post;