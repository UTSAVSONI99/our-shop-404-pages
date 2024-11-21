import Image from "next/image";
import { notFoundPages } from "./404-messages";
import { notFoundPagesPageType } from "./404-messages";
import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Home() {
  return (
    <div >
      <NotFoundCard notFoundPagesPage={notFoundPages.underMantaince} />
      <NotFoundCard notFoundPagesPage={notFoundPages.expiredStore} />
      <NotFoundCard notFoundPagesPage={notFoundPages.blockedAccount} />
      <NotFoundCard notFoundPagesPage={notFoundPages.generalInfo} />
      <NotFoundCard notFoundPagesPage={notFoundPages.manintanceMode} />
      <NotFoundCard notFoundPagesPage={notFoundPages.underDevelopment} />
      {/* <NotFoundCard notFoundPagesPage={notFoundPages.domainAvailable} /> */}
      <NotFoundCard notFoundPagesPage={notFoundPages.reportedUnsafe} />
    </div>
  );
}



function NotFoundCard(
  {
    notFoundPagesPage: x,
    logo = "/logo/logo-square.jpeg",
    storeName = "Our-Shop.site"
  }: {
    notFoundPagesPage: notFoundPagesPageType,
    logo?: string,
    storeName?: string
  }

) {
  return (<div className="lg:p-28 p-5 ">
    <section className="flex flex-col max-w-2xl p-12 border rounded-lg shadow-lg">

      <div className="flex  rounded-lg mb-6 items-center">
        <img className="h-20 w-20 rounded-full border-4 border-gray-200" src={logo} alt="Rounded logo" />
        <h3 className="text-4xl font-bold ml-6 text-gray-800">{storeName}</h3>
      </div>


      <div className="text-3xl font-semibold text-gray-700 mb-4">
        {x.title}
      </div>

      <div className="text-gray-600 mb-4  ">
        {x.message}
      </div>

      <div className="bg-gray-200 rounded-lg p-4 text-gray-700 shadow-md mb-6">
        <p className="font-bold text-gray-800 mb-2">Note:</p>
        <p>{x.note}</p>
      </div>
      <div>

        <Button asChild>
          <Link href={x.button.link}>
            {x.button.text}
          </Link>
        </Button>
      </div>
    </section>



  </div>)
}