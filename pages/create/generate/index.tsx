import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useGenerateImage } from "@/hooks/useGeneratePost";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

function Generate() {
  const {
    mutate: generateImage,
    isLoading: isGenerating,
    data: imageUrl,
  } = useGenerateImage();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const apiKey = e.target.apiKey.value;
      const prompt = e.target.prompt.value;
      generateImage({ apiKey, prompt });
    }
  };
  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="xl:min-h-screen w-full flex justify-center items-center xl:border mt-20 xl:mt-0">
          <Card className="max-w-md xl:border border-0 w-full">
            <CardHeader>
              <CardTitle>Generate image</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid w-full items-center gap-4">
                  <div className="flex gap-2">
                    <Input
                      type="password"
                      name="apiKey"
                      placeholder="OPENAI_API_KEY"
                      disabled={isGenerating}
                    />
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button
                            variant="ghost"
                            onClick={(e) => e.preventDefault()}
                          >
                            <QuestionMarkCircleIcon className="w-5 h-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm p-5 border rounded-lg bg-background max-w-sm">
                            To generate an image, you&apos;ll need to sign up to{" "}
                            <Button asChild variant="link" className="p-0 m-0">
                              <Link className="" href="https://openai.com">
                                https://openai.com
                              </Link>
                            </Button>{" "}
                            and create a new API key.
                            <br />
                            ($18 of free credit is available for new users)
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <Textarea
                    name="prompt"
                    placeholder="Enter a detailed description of the image you want to generate."
                    disabled={isGenerating}
                  />
                </div>
                <Button className="w-full" disabled={isGenerating}>
                  {isGenerating ? "Generating..." : "Generate"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
export default Generate;
