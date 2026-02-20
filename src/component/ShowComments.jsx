 
function ShowComments({comment}) {
  const firstLetter = comment.name.split('')
  return (
        <div
        key={comment.id}
        className="border p-4 rounded-lg mb-3 bg-gray-40 shadow-xl border-white "
      >
        
        <div className="flex justify-end">
        <h3 className="font-semibold text-right mr-2">{comment.name}</h3>
        <h3 className="font-semibold rounded-full bg-gray-400 w-8 h-8 right-0">{firstLetter[0]}</h3>
        </div>

        <p className="mt-2 text-right">{comment.text}</p>
    </div>

  )
}

export default ShowComments