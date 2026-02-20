import { Link } from "react-router-dom";

function BlogSection({ data, lastOnes, name }) {
    
let postsToShow = null;
 if(lastOnes == 0){
    postsToShow =  data.posts.slice(-3)
}
else if(lastOnes == 1){
 postsToShow = data.posts; 
}
if (lastOnes === 2 && name.length > 0) {
  postsToShow = data.posts.filter((post) => post.author.name === name); // Correct filter function
}
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsToShow.map((eachpost) => (
          <div
            key={eachpost.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={eachpost.coverImage[0]?.url}
              alt={eachpost.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <div className="flex items-center justify-end gap-3">
                <h3 className="mr-3 text-sm text-gray-700 font-medium">
                  {eachpost.author.name}
                </h3>
                <img
                  src={eachpost.author.avatar?.url}
                  alt={eachpost.author.name}
                  className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
                />
              </div>

              <h2 className="text-lg font-bold text-gray-800 mb-4 line-clamp-2">
                {eachpost.title}
              </h2>

              <Link to={`/Blog/${eachpost.slug}`}>
                <button className="mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:!bg-blue-500 hover:text-white transition duration-300 text-sm">
                  مطالعه مقاله
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;