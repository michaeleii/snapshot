import MainLayout from "@/components/MainLayout";
import { ModeToggle } from "@/components/ModeToggle";
import ImageCard from "./ImageCard";
import { usePosts } from "@/hooks/usePosts";
import { Button } from "@/components/ui/button";

export default function Home() {
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = usePosts();

  if (isLoading) return null;
  if (!posts) return null;
  return (
    <MainLayout>
      <div className="relative grid grid-cols-1 justify-items-center gap-10 overflow-y-auto p-10  px-5 xl:max-h-screen xl:p-20 snap-y snap-mandatory scroll-smooth">
        <div className="absolute right-2 top-2 hidden xl:block">
          <ModeToggle />
        </div>
        {posts.pages.map((page) => {
          return page.data.length === 0 ? (
            <p>You have viewed every post 🎉</p>
          ) : (
            page.data.map((post) => (
              <ImageCard
                key={post.id}
                postId={post.id}
                userId={post.user?.id}
                username={post.user?.username || "Anonymous User"}
                profileImage="/default-user.jpg"
                image={post.image_url}
              />
            ))
          );
        })}
        <div className="w-full xl:max-w-sm">
          {hasNextPage && (
            <Button
              className="w-full"
              disabled={isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </Button>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
