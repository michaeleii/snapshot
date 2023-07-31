import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonImageCard() {
  return (
    <Card className="rounded-none snap-center">
      <Skeleton className="w-[400px] h-[533px] rounded-none" />
      <CardContent className="flex p-4 items-center justify-between gap-5">
        <div className="flex gap-3 items-center">
          <Skeleton className="w-[40px] h-[40px] rounded-full" />
          <Skeleton className="w-[80px] h-[20px] rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}
export default SkeletonImageCard;
