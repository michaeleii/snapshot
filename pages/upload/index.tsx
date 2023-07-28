import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCreatePost } from "@/hooks/useCreatePost";
import ProtectedRoute from "@/components/ProtectedRoute";

function Upload() {
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
          <Card className="max-w-md xl:border border-0">
            <CardHeader>
              <CardTitle>Create post</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid w-full items-center gap-4">
                  <Input
                    name="picture"
                    id="picture"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </div>
                <Button className="w-full" disabled={isUploading}>
                  {isUploading ? "Uploading..." : "Upload"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
export default Upload;
