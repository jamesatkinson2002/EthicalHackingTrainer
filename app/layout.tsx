import './globals.css'
import Link from 'next/Link';

function NavBar()
{
  const obj = { Challenges:"dashboard", About:"About", Login:"Login", 'Sign Up':"SignUp"};

  return(
    <nav class="space-x-4 p-4 bg-slate-700">

    <Link class="font-medium text-lg px-5 py-2 m-4 text-slate-200 rounded-md hover:bg-slate-100 hover:text-slate-900" href="/">Ethical Hacking Trainer</Link>
        <div class="text-center">
        {Object.entries(obj).map(([k,v]) => (
          <Link class="font-medium px-5 py-2 m-4 text-slate-200 rounded-md hover:bg-slate-100 hover:text-slate-900" href={`${v}`}>{`${k}`}</Link>)
        )}

        </div>
    </nav>)

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body class="mx-auto min-h-screen dark:bg-slate-800 font-sans">
    <NavBar />
      {children}
       <footer>
        <p class="text-slate-300">&copy; 2023 Ethical Hacking Trainer. All rights reserved.</p>
      </footer>
    </body>
    </html>
  )
}
