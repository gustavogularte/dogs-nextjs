import photosGet from "@/actions/photosGet";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const data = await photosGet()

  return (
    <article>
        <Feed photos={data}/>
    </article>
  );
}
