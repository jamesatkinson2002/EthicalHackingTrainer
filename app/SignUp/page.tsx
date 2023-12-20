'use client';
import {useState} from 'react';

import axios from 'axios';

function onSubmit(value){

	console.log(value);
	axios.post('/api/sendpost', value).then((response) => {
		console.log(response);
	})
	.catch((e) => console.log(e))
};

export default function Page()
{
	const [inputs, setInputs] = useState({});

	const handleChange = (events) => {
		const name = events.target.name;
		const value = events.target.value;
		setInputs(values => ({...values, [name]:value}))
	}

	const handleSubmit = (events) => {

	}

	return (
	<div class="container rounded-xl mx-auto p-4 m-8 bg-slate-700/50 shadow-lg"> 
		<h1 class="flex justify-center font-bold text-xl text-slate-200 p-4">Create new account</h1>
		<form>
			<div class="flex justify-center m-4">
				<input class="bg-slate-200 rounded-md p-2" name="username" type="text" value = {inputs.username} onChange={handleChange} placeholder="Username..."/>	
			</div>
			<div class="flex justify-center m-4">
				<input class="bg-slate-200 rounded-md p-2" name="email" type="email" value={inputs.email} onChange={handleChange} placeholder="Email address..."/>
			</div>
			<div class="flex justify-center m-4">
				<input class="bg-slate-200 rounded-md p-2" name="password" type="password" value={inputs.password} onChange={handleChange} placeholder="Password..."/> 
			</div>
			<div class="flex justify-center m-4">
	
						<button class="bg-slate-600 text-slate-200 hover:bg-slate-500 rounded-lg p-2 m-4" onClick={ (e) => {onSubmit({username: inputs.username, password: inputs.password, email: inputs.email})}}>Submit</button>
			</div>
		</form>
	
	</div>)
}