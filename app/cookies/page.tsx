import type { Metadata } from 'next'
import LegalPage from '@/components/legal-page'
import { cookiePolicy } from '@/lib/legal-content'

export const metadata: Metadata = {
  title: 'Cookie Policy | Steady',
}

export default function CookiesPage() {
  return <LegalPage document={cookiePolicy} />
}
