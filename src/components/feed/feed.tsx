import { photo } from "@/actions/photosGet";
import FeedPhotos from "./feedPhotos";

export default async function Feed({photos}: {photos: photo[]}) {
  return (
    <article className="container grid">
      <FeedPhotos photos={photos}/>
    </article>
  );
}