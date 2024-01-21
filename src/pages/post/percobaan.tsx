interface Post {
    title: string;
  }
  
  interface Resulted {
    name: string;
  }
  
  interface ListPokemon {
    results: Resulted[];
  }
  
  interface Props {
    posts: Post[];
    results: ListPokemon;
  }
  
  const CobaPost = ({ results }: Props) => {
    return (
      <main className={`flex min-h-screen flex-col items-center justify-center p-24`}>
        <div>
          <h2 className="text-lg font-bold p-12">
            {'Halaman Post dengan Server Side Fetch '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
  
          {results.results.map((result, index) => (
            <p key={index}>{result.name}</p>
          ))}
        </div>
      </main>
    );
  };
  
  export const getServerSideProps = async () => {
    const responseKedua = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
    const timedata: ListPokemon = await responseKedua.json();
  
    return {
      props: {
        results: timedata,
      },
    };
  };
  
  export default CobaPost;
  