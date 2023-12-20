export default function Page() {
	return (
	<div class="container rounded-xl mx-auto p-4 m-8 bg-slate-700/50 shadow-lg"> 
		<h1 class="flex justify-center font-bold text-xl text-slate-200 p-4">Login</h1>
		<form>
			<div class="flex justify-center m-4">
			<input class="bg-slate-200 rounded-md p-2" type="text" placeholder="Username..."/>	
			</div>
			<div class="flex justify-center m-4">

			<input class="bg-slate-200 rounded-md p-2" type="password" placeholder="Password..."/> 
</div>
		<div class="flex justify-center m-4">
		<button class="bg-slate-600 text-slate-200 hover:bg-slate-500 rounded-lg p-2 m-4 px-4" type="submit">Enter</button>
		</div>
		</form>
	</div>)

}