import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useGenerateImage } from "@/hooks/useGeneratePost";
import Link from "next/link";

import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

                    <Popover>
                      <PopoverTrigger>
                        <Button variant="ghost" type="button">
                          <QuestionMarkCircleIcon className="w-5 h-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent side="top">
                        <p className="text-sm">
                          <span>
                            To generate an image, you&apos;ll need to sign up to
                          </span>{" "}
                          <Button asChild variant="link" className="p-0 m-0">
                            <Link
                              className="m-0 p-0"
                              href="https://openai.com"
                              target="_blank"
                            >
                              https://openai.com
                            </Link>
                          </Button>{" "}
                          and create a new API key. <br /> <br />{" "}
                          <span>
                            ($18 of free credit is available for new users)
                          </span>
                        </p>
                      </PopoverContent>
                    </Popover>
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
