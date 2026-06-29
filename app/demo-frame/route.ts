import DEMO_HTML from '@/components/app-demo-html'
import { NextResponse } from 'next/server'

export function GET() {
  return new NextResponse(DEMO_HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
