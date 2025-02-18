// components/ProfileCard.tsx

import React from 'react'
import Image from 'next/image'
import { Session } from 'next-auth'

interface ProfileCardProps {
  user: {
    name: string
    username: string
    image: string
    bio?: string
  }
  session: Session | null
  isOwnProfile: boolean
  startups: any[] // Update this type based on your startup interface
}

const ProfileCard = ({ user, session, isOwnProfile, startups }: ProfileCardProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 relative overflow-hidden shadow-xl">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-xl" />
      
      <div className="relative flex flex-col lg:flex-row items-center gap-8">
        {/* Profile Image Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-75" />
          <div className="relative rounded-full border-4 border-white shadow-xl transition-transform duration-300 transform hover:scale-105">
            <Image
              src={user.image}
              alt={user.name}
              width={200}
              height={200}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Name */}
          <div className="inline-block px-6 py-2 bg-primary text-white rounded-full transition-transform duration-300 hover:scale-105">
            <h1 className="text-2xl font-bold">{user.name}</h1>
          </div>

          {/* Username and Badges */}
          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <span className="text-4xl font-bold text-white">
              @{user.username}
            </span>
            {isOwnProfile && (
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary">
                This is you
              </span>
            )}
          </div>

          {/* Stats Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-6">
            <div className="text-center">
              <span className="block text-3xl font-bold text-white">{startups.length}</span>
              <span className="text-gray-300">Startups</span>
            </div>
            <div className="h-12 w-px bg-gray-600" />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-300 mb-2">Latest Startup</div>
              {startups.length > 0 ? (
                <div className="text-white font-semibold truncate">
                  {startups[0].title}
                </div>
              ) : (
                <div className="text-gray-400 italic">No startups yet</div>
              )}
            </div>
          </div>

          {/* Bio */}
          {user.bio && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-lg text-gray-200">
                {user.bio}
              </p>
            </div>
          )}

          {/* Contact/Action Button - Only show if it's not the user's own profile */}
          {!isOwnProfile && (
            <button className="mt-4 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300">
              Contact {user.name.split(' ')[0]}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard