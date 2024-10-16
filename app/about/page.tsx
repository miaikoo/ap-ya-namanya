import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Us
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2 items-center">
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        {/* Foto 1 */}
        <div className="flex flex-col items-center">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author1} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <p className="text-muted-foreground text-lg py-2">{siteConfig.author1}</p>
        </div>
        {/* Foto 2 */}
        <div className="flex flex-col items-center">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar2.png" alt={siteConfig.author2} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <p className="text-muted-foreground text-lg py-2">{siteConfig.author2}</p>
        </div>
        {/* Foto 3 */}
        <div className="flex flex-col items-center">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar3.png" alt={siteConfig.author3} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <p className="text-muted-foreground text-lg py-2">{siteConfig.author3}</p>
        </div>
      </div>
      <p className="text-muted-foreground text-lg py-4 text-center">
      The blog website "MAMdulu" was created by three friends from the Computer Engineering program at the Institut Teknologi Sepuluh Nopember (ITS) in 2023. MAM in "MAMdulu" stands for "Mia, Aqila, and Mazaya" which is an abbreviation of the three creators' names.
      This blog was created to help people find food recommendations both inside and outside Surabaya.
      </p>
    </div>
  );
}
