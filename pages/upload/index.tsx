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

function Upload() {
  return (
    <MainLayout>
      <div className="min-h-screen w-full flex justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create post</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <Input id="picture" type="file" />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create</Button>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
}
export default Upload;
