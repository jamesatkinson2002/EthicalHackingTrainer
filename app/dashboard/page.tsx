'use client';
import {Suspense} from 'react'; 
import {useRouter } from 'next/navigation';
import Image from 'next/Image';

export default function Page() {
	const router = useRouter();

	const ChallengesHeader = ({title, description}) => {
		return (
			<div class="mb-8"> 		
				<h1 class="pb-4 text-4xl text-slate-300 font-bold"> Challenges </h1>
				<p class="font-medium text-slate-300">{description} </p>
			</div>
		)
	}	

	const ChallengeCard = ({title, description, route}) => {
	return (
		<div class="box-border p-5 mb-5 shadow-lg rounded-md bg-slate-700/50 cursor-pointer hover:scale-105 transition transform ease-in-out delay-30" 
			onClick={()=>router.push(route)}>
			<h1 class="font-semibold text-slate-300 text-2xl my-2">{title}</h1>
			<p class="text-slate-400 my-2">
				{description}
			</p>
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded" onClick={()=>router.push(route)}>Begin</button>
			<p class="font-medium text-slate-400">Progress 0% </p>
		</div>)
	}
	
	return( 
		<div class="m-0 p-0 flex justify-center">
			<div id ="main" class="container p-5 m-5 rounded-md">
				<ChallengesHeader title="Challenges" description="Each section features interactive attack/defense exercises to put your ethical hacking skills to the test. 
															Simply click Begin on a course and compete with other ethical hackers!"/>
				<ChallengeCard title="SQL Injection" description="Test your skills in SQL injection attacks and prevention." route="/SQLInjection" />
				<ChallengeCard title="XSS (Cross-Site-Scripting)" description="Explore and defend against Cross Site Scripting attacks." route="/XSS" />
				<ChallengeCard title="Remote Code Execution" description="Learn about Remote Code Execution vulnerabilities and safeguards." route="/RCE" />
				<ChallengeCard title="	Cross-site Request Forgery (CSRF)" description="Understand and mitigate Cross-site Request Forgery attacks." route="/CSRF" />
			</div>
		</div>

	)
}