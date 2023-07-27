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
import { Label } from "@/components/ui/label";

function Settings() {
  return (
    <MainLayout>
      <div className="min-h-screen w-full flex justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Change username</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <Label>Username</Label>
                <Input id="username" type="text" />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Change</Button>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
}
export default Settings;
