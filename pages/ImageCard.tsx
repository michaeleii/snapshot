import { Card, CardContent } from "@/components/ui/card";
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
  return (
    <Card className="rounded-none">
      <Image src={image} alt="" width={400} height={400} />
      <CardContent className="flex p-4 items-center gap-5">
        <Image
          src={profileImage}
          alt=""
          className="rounded-full object-cover object-center"
          width={40}
          height={40}
        />
        <span>{username}</span>
      </CardContent>
    </Card>
  );
}
export default ImageCard;
