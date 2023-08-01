import MainLayout from "@/components/MainLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
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
import { useUser } from "@/contexts/UserContext";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useEffect, useState } from "react";

// function Settings() {
//   const { currentUser } = useUser();
//   const [username, setUsername] = useState("");
//   const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser();

//   useEffect(() => {
//     if (currentUser) setUsername(currentUser.username);
//   }, [currentUser]);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const username = e.currentTarget.username.value;
//     updateUser({ username });
//   };
//   return (
//     <ProtectedRoute>
//       <MainLayout>
//         <div className="xl:min-h-screen w-full flex justify-center items-center xl:border mt-20 xl:mt-0">
//           <Card className="max-w-lg xl:border border-0">
//             <CardHeader>
//               <CardTitle>Change username</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form className="space-y-5" onSubmit={handleSubmit}>
//                 <div className="grid w-full items-center gap-4">
//                   <Label>Username</Label>
//                   <Input
//                     id="username"
//                     type="text"
//                     required
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                 </div>
//                 <Button className="w-full" disabled={isUpdating}>
//                   {isUpdating ? "Updating..." : "Change"}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </MainLayout>
//     </ProtectedRoute>
//   );
// }

function SettingsForm() {
  const { currentUser } = useUser();
  const [username, setUsername] = useState("");
  const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser();

  useEffect(() => {
    if (currentUser) setUsername(currentUser.username);
  }, [currentUser]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    updateUser({ username });
  };
  return (
    <Card className="max-w-lg border-0">
      <CardHeader>
        <CardTitle>Change username</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <Label>Username</Label>
            <Input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <Button className="w-full" disabled={isUpdating}>
            {isUpdating ? "Updating..." : "Change"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
export default SettingsForm;
