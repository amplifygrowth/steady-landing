import type { Metadata } from 'next'
import LegalPage from '@/components/legal-page'
import { refundPolicy } from '@/lib/legal-content'

export const metadata: Metadata = {
  title: 'Refund Policy | Steady',
}

export default function RefundsPage() {
  return <LegalPage document={refundPolicy} />
}
