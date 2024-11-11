import { formatDate } from "@/lib/utils"
import { EyeIcon, Link } from "lucide-react"

const StartupCard = ({post}:{StartupTypeCard}) => {
  return (
    <li className="startup-card group">
        <div className="flex-between">
            <p className="startup_card_date">
                {formatDate(post._createdAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-primary"/>
                <span className="text-16-medium">{post.views}</span>
            </div>
        </div>
        <div className="flex-between mt-5 gap-5">
            <div  className="flex-1">
                <Link href={`/user/${post.author?_id}`}>
                <p>{post.author?</p>
                </Link>
            </div>
        </div>
    </li>
  )
}

export default StartupCard