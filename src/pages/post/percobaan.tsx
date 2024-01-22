import { OldCard } from "@/components";
import Layout from "@/layouts";
import { useRouter } from "next/router";

  interface Resulted {
    name: string;
    url:string;
  }
  
  interface ListPokemon {
    results: Resulted[];
  }
  
  interface Props {
    results: ListPokemon;
  }
  
  const CobaPost = ({ results }: Props) => {
    const router = useRouter();
    const token = localStorage.getItem("customToken");
    if (token) {

      return (
        
        <main 
        className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}
        >
          <Layout>
            <OldCard direction="column">
            <section className="w-full p-5 backdrop-blur-xl bg-sky-100/[.9] text-black flex flex-row justify-center item-center hover:bg-gray-700 hover:text-white rounded-lg">
                <h2 className="w-full p-5 text-3xl bg-sky-100/[.9] text-black flex justify-center rounded-md">
                  {'Halaman Pokemon Post'}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
            </section>

              <section>

                {results.results.map((result, index) => (
                  
                  <section key={index} className="flex border mt-2 mb-2 border-sky-300 justify-center item-center flex-wrap backdrop-blur-xl bg-sky-100/[.9] p-5 ">
                    <p key={index}>{result.name}</p>
                    <p key={index}>{result.url}</p>               
                  </section>

                ))}
              </section>

              
            </OldCard>
          </Layout>

        </main>
      );
    }

    return (
      <OldCard direction="row" justifyContent="center">
        <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg m-2 px-3 py-2 text-2xl font-medium" type="button" onClick={() => router.push('/weather/register')}>
          Register dulu untuk dapat token !!!
        </button>
      </OldCard>

    )      // Navigate to the desired route upon successful login
 

  };
  
  export const getServerSideProps = async () => {
    const responseKedua = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25');
    const timedata: ListPokemon = await responseKedua.json();
    
    console.log (responseKedua);

    return {
      props: {
        results: timedata,
      },
    };
  };
  
  export default CobaPost;
  