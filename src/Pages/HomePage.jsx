 import BlogSection from '../component/BlogSection'
import AuthorSection from '../component/AuthorSection'
import { useQuery } from '@apollo/client/react';
import { GET_POSTS } from '../GRAPHQL/queries';
import { Bars } from 'react-loader-spinner';


function HomePage() {
    const { loading, error, data } = useQuery(GET_POSTS);
  if (error) return <h1>{error.message}</h1>;
  if (loading) return (
   <Bars
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
    );
console.log(data)

  return (
    <div>
        <div className='left-20 absolute top-10'>
         <h1 className="text-right mb-4 text-xl font-bold mr-8">مقالات</h1>
            <BlogSection data={data} lastOnes={1} name={null}/>
        </div>

       <div className='right-10 absolute top-20'>
        <AuthorSection data={data}/>
        </div>
    </div>
  )
}

export default HomePage