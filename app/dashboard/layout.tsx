import Link from 'next/Link';
import Image from 'next/image'

export default function DashboardLayout({ 
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<section>
			{children}
		</section>
	)

}