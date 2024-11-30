import { NextResponse } from "next/server";

// In-memory storage for demo purposes
const projects: any[] = [];

export async function POST(req: Request) {
  try {
    const { name, url } = await req.json();
    const project = {
      id: Date.now().toString(),
      name,
      url,
      documentsCount: 0,
      createdAt: new Date().toISOString()
    };

    projects.push(project);
    return NextResponse.json(project);
  } catch (error) {
    console.error("[PROJECTS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    return NextResponse.json(projects);
  } catch (error) {
    console.error("[PROJECTS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}