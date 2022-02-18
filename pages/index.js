export default function Home({date}){

  return(
    <>
      <h1>
        {
          date
        }
      </h1>
      <button onClick={()=>fetch("/api/revalidate")} >
        <h1>UNSTABLE_REVALIDATE</h1>
      </button>
    </>
  )
}

export async function getStaticProps(){
  return{
    props:{
      date:new Date().toISOString()
    }
  }
}