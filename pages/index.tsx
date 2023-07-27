import MainLayout from "@/components/MainLayout";
import { ModeToggle } from "@/components/ModeToggle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <div className="relative grid grid-cols-1 justify-items-center gap-10 overflow-y-auto p-10  px-5 xl:max-h-screen xl:p-20">
        <div className="absolute right-2 top-2 hidden xl:block">
          <ModeToggle />
        </div>
        {Array.from({ length: 10 }).map((_, i) => (
          <Card key={i} className="rounded-none border-2">
            <Image src="/test-post.jpg" alt="" width={400} height={400} />
            <CardContent className="flex p-4 items-center gap-5">
              <Image
                src="/default-user.jpg"
                alt=""
                className="rounded-full object-cover object-center"
                width={40}
                height={40}
              />
              <span>Test User</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
}
