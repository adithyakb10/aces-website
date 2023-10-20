import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({ name, image, link }) => {
    return (
        <Link href={link ? link : ""}>
            <div className="event rounded-lg my-5 lg:mx-20 border-2 pt-2 flex flex-col justify-between w-40 lg:w-52 h-80  border-gray-400">
                <Image alt={name} className="w-auto h-52 " src={image} width={52} height={80} />
                <h2 className="text-2xl break-words mx-4">{name}</h2>
                <div className="bg-white rounded-b-lg px-4 py-2 mt-3 text-black">
                    <Link href={link ? link : ""}>
                        <h4 className="text-sm">Learn More...</h4>
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;