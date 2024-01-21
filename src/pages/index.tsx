import Layout from "@/layouts";
import Head from "next/head";
import { OldCard } from "@/components";
import Link from "next/link";


export default function Home() {

  return (

    <main 
    className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}
    >
      <Layout >
        <section className={`bg-sky-100/[1] rounded-b-sm p-24`}>
          <Head>
            <title>{'Halaman Index'}</title>
          </Head>

          <OldCard>
            <Link passHref href={'/weather/register'} className={`mb-3 text-2xl font-semibold`}>
              Silahkan register dahulu {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>
          </OldCard>
        </section>
      </Layout>
    </main>  

  )
}
