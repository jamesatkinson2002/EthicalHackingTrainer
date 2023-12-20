import {NextResponse} from 'next/server';
import conn from '../../lib/db.tsx';

export async function GET(){
	const p = await conn.connect();

	const query = 'SELECT * FROM "CreateAccountTable"."Accounts"';
	const q = await p.query(query);
	p.release();
	return NextResponse.json({results:q});
}

export async function POST(req: Request)
{
	try{

	
	const jsonReq = await req.json();
	const username = `'${jsonReq.username}'`;
	const password = `'${jsonReq.password}'`;
	const email = `'${jsonReq.email}'`;

	const query = `INSERT INTO "CreateAccountTable"."Accounts" VALUES(${username}, ${email}, ${password})`;

	await conn.query(query);
	
	} catch(e){
		console.log(e);
	}
	return NextResponse.json({"results":""});

}