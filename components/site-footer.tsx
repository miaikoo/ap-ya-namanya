import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} {siteConfig.author}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
