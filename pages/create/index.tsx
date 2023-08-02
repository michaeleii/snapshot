import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCreatePost } from "@/hooks/useCreatePost";
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

function Create() {
  const {
    mutate: createPost,
    isLoading: isUploading,
    error: ImageUploadError,
  } = useCreatePost();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);

      const image = formData.get("picture");
      console.log(image);
      if (image instanceof File) {
        console.log(formData);
        createPost(image);
      }
    }
  }
  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="xl:min-h-screen w-full flex justify-center items-center xl:border mt-20 xl:mt-0">
          <Card className="max-w-md w-full xl:border border-0">
            <CardHeader>
              <CardTitle>Create post</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/create/upload">Upload an image</Link>
              </Button>
              <Separator className="my-4" />
              <Button asChild className="w-full" variant="secondary">
                <Link href="/create/generate">Generate an image</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
export default Create;
