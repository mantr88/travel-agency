import { Hotel } from '@/app/types/hotel';
import Image from "next/image";
import css from './last-ads.component.module.css'
import Star from '@/app/ui/svgElements/Star';

interface LastAdsCardProps {
  hotel: Hotel;
}

function LastAdsCard({ hotel }: LastAdsCardProps) {
  const { name, photo, city, country, rating } = hotel;
  return (
    <li key={name} className={css.listItem}>
      <Image src={photo} alt={name} />
      <h4 className={css.name}>{name}</h4>
      <p className={css.city}>{city}, <span className={css.country}>{country}</span></p>
      <p className={css.rating}><Star /><span>{rating}</span></p>
    </li>
  )
}

export default LastAdsCard;