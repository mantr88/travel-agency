import Link from 'next/link';
import css from './link-to-all-ads.component.module.css';

export function LinkToAllAds() {
	return (
		<>
			<Link href="/all-ads" className={css.allAdsLink}>
				Відкрити всі оголошення
			</Link>
		</>
	);
}
