// app/user/[id]/page.tsx

import { auth } from "@/auth"
import { client } from "@/sanity/lib/client"
import { notFound } from "next/navigation"
import UserStartups from "@/components/UserStartups"
import { Suspense } from "react"
import { StartupCardSkeleton } from "@/components/StartupCard"
import ProfileCard from "@/components/ProfileCard"

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const id = params.id
  const session = await auth()
  
  // Fetch user data
  const user = await client.fetch(`
    *[_type == "user" && _id == $id][0]{
      _id,
      name,
      image,
      username,
      bio
    }
  `, { id })
  
  if (!user) return notFound()

  const startups = await client.fetch(`
    *[_type == "startup" && author._ref == $userId] | order(_createdAt desc) {
      _id,
      title,
      description,
      _createdAt
    }
  `, { userId: id })
  
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <ProfileCard 
        user={user} 
        session={session} 
        isOwnProfile={session?.id === id}
        startups={startups}
      />
      
      <div className="mt-10">
        <h2 className="text-30-bold mb-6">
          {session?.id === id ? "Your" : "All"} Startups
        </h2>
        <ul className="card_grid-sm">
          <Suspense fallback={<StartupCardSkeleton />}>
            <UserStartups id={id} />
          </Suspense>
        </ul>
      </div>
    </section>
  )
}