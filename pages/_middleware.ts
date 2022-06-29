import { NextResponse } from "next/server";

const signedinPages = ['/', '/playlist', '/library'];

export default function middleware(req){
  if (signedinPages.find((p) => p === req.nextUrl.pathname)){
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    const origin = req.nextUrl.origin
    if (!token){
      return NextResponse.redirect(`${origin}/signin`);
    }
  }
}