import "./infocard.css"
import Image from "next/image"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function InfoCard({icon,header,content}){
    return(
        <>
            <div className="flex flex-col gap-4 items-center p-6 info_card">
                <Image src={icon} alt="icon" className="info_card_icon"/>
                <div className="font-bold text-xl">{header}</div>
                <div className="text-sm">{content}</div>
                <a href="#" className="flex">
                    <span className="underline">Learn More</span>
                    <NavigateNextIcon/>
                </a>
            </div>
        </>
    )
}