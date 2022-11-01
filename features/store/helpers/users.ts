import type { UserNode } from "@gql/types/graphql"
import type { User } from "@store/slices/userSlice"

export const prepUserData = (user: UserNode)=>{
  const userData: User = {
    user: {
      pk: user.pk ?? 0,
      username: user.username ?? '',
      email: user.email,
      profile: {
        pk: user.profile?.id ?? '',
        imageUrl: user.profile?.imageUrl ?? ''
      }
    }
  }
  return userData
}
