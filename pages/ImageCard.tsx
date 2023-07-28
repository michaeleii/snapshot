import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@/contexts/UserContext";
import { useDeletePost } from "@/hooks/useDeletePost";
import { Trash2 } from "lucide-react";
import Image from "next/image";

function ImageCard({
  postId,
  userId,
  username,
  profileImage,
  image,
}: {
  postId: number;
  userId?: string;
  username: string;
  profileImage: string;
  image: string;
}) {
  const { currentUser } = useUser();
  const { mutate: deletePost, isLoading: isDeleting } = useDeletePost();

  const isOwner = currentUser?.id === userId;

  return (
    <Card className="rounded-none snap-center">
      <Image src={image} alt="" width={400} height={400} />
      <CardContent className="flex p-4 items-center justify-between gap-5">
        <div className="flex gap-3 items-center">
          <Image
            src={profileImage}
            alt=""
            className="rounded-full object-cover object-center"
            width={40}
            height={40}
          />
          <span>{username}</span>
        </div>
        {isOwner && (
          <Button
            disabled={isDeleting}
            variant="destructive"
            onClick={() => deletePost(postId)}
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
export default ImageCard;
