import { Link } from "react-router-dom";

function AuthorSection({data}) {

   const uniqueAuthors = [
    ...new Map(
      data.posts.map((post) => [post.author.id, post.author])
    ).values(),
  ];

return (
  <div
    dir="ltr"
    className="bg-white rounded-2xl shadow-lg p-6"
  >
    <h2 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2 text-right">
      نویسندگان
    </h2>
    <div className="flex flex-col gap-4">
  {uniqueAuthors.map((author) => (
    <Link
      key={author.id}
      to={`Author/${author.slug}`}
      className="flex items-center justify-end bg-gray-50 hover:bg-blue-50 rounded-xl p-4 transition-all duration-300 hover:shadow-md cursor-pointer group"
    >
      <div className="text-right mr-3">
        <h3 className="text-sm font-semibold text-gray-800">{author.name}</h3>
        <p className="text-xs text-gray-500">{author.feild}</p>
      </div>

      <img
        src={author.avatar?.url}
        alt={author.name}
        className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover group-hover:scale-105 transition duration-300"
      />
    </Link>
  ))}
</div>
  </div>
);
}

export default AuthorSection;