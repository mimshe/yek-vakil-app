import {Link} from 'react-router-dom'
export default function BottomNavigationItem({text, imageSrc, path = "#"}) {
    return (
        <div className="w-[412px] h-[80px]  bottom-0   bg-white flex items-center justify-center">
            <Link to={path}>
                {imageSrc}
                <span> {text} </span>
            </Link>
        </div>
    )
}