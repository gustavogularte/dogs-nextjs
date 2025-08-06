import { photo } from '@/actions/photosGet';
import Image from 'next/image';
import Link from 'next/link';
import styles from './feed.module.css';

export default async function FeedPhotos({ photos }: { photos: photo[] }) {
  console.log(photos);
  return (
    <ul className={styles.feed}>
      {photos.map((photo) => (
        <li key={photo.id} className={styles.foto}>
          <Link href={`foto/${photo.id}`}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={1500}
              height={1500}
              sizes="80vw"
            />
            <span>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
