import styles from './page.module.css'
import EditSVG from '@/assets/edit.svg'
import Menhera from '@/assets/menhera.png'
import Image from 'next/image'

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<main className={styles.main}>
				<div className={styles.header}>
					<h1 className={styles.headerText}>NextJS + Electron Boilerplate</h1>
					<h4 className={styles.headerSubText}>
						That one boilerplate you couldn{"'"}t find, until now.
					</h4>
				</div>
				<Image
					src={Menhera.src}
					className={styles.menhera}
					alt="menhera"
					width={200}
					height={200}
				/>
				<div className={styles.note}>
					<EditSVG />
					Get started by editting frontend/app/page.tsx
				</div>
				<footer className={styles.footer}>
					{'<'}/{'>'} with ♥
				</footer>
			</main>
		</div>
	)
}
