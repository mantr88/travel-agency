
import { LinkToAllAds } from "@/app/ui/LinkToAllAds/link-to-all-ads.component";
import { hotels } from "@/mock/hotels";
import LastAdsCard from "./last-ads-card";

import css from './last-ads.component.module.css'
import gstyles from "../../page.module.css";

// interface LastAdsProps {
// 	hotels: Hotel[];
// }

export function LastAds() {
	return (
		<section className={gstyles.container}>
			<h2 className={css.title}>Останні оголошення</h2>
			<LinkToAllAds />
			<ul className={css.list}>{hotels.map((hotel) => {
				return (<LastAdsCard hotel={hotel} />)
			})}</ul>
		</section>
	);
}
