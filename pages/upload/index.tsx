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
import { useCreatePost } from "./useCreatePost";

function Upload() {
  const { mutate: createPost, isLoading: isUploading } = useCreatePost();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const image = formData.get("image");
      if (image instanceof File) {
        createPost(image);
      }
    }
  }
  return (
    <MainLayout>
      <div className="xl:min-h-screen w-full flex justify-center items-center xl:border mt-20 xl:mt-0">
        <Card className="max-w-md xl:border border-0">
          <CardHeader>
            <CardTitle>Create post</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <Input
                  id="picture"
                  type="file"
                  accept="image/png, image/jpeg"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={isUploading}>
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
}
export default Upload;
