import supabase from "./supabase";

export async function generateImage(prompt: string, apiKey: string) {
  const res = await fetch(`/api/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt, apiKey }),
  });
  const data = (await res.json()) as { image_url: string };
  const image_url = data.image_url;
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (!user) return null;
  if (userError) throw userError;
  const { error } = await supabase
    .from("post")
    .insert([{ user_id: user.id, image_url }])
    .select();
  if (error) throw error;
}
