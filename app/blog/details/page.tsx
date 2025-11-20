'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import BlogDetail from "@/components/blog/BlogDetail.js"

function BlogDetailsContent() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('slug') || ''

  return <BlogDetail slug={slug} />
}

export default function BlogDetailsPage() {
  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <BlogDetailsContent />
    </Suspense>
  );
}