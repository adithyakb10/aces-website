import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'ACES Study Material - Semester 3',
    description: 'Generated by Rahul A B',
}

const page = () => {
    return (
        <section className='w-full flex-col'>
            <h1 className='head_text font-bold text-black text-4xl flex justify-center'>
                <div className='underline'>Semester 3</div>
            </h1>
            <h2 className='mt-5 head_text font-bold text-black text-2xl'>Study Materials :</h2>
            <div className='ml-5'>
                <ul className="list-disc ml-5 w-full">
                    <li> <Link href={"/studymaterial/S3/Notes/CST201"}>Data Structures (CST201)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/Notes/CST203"}>Logic System Design (CST203)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/Notes/CST205"}>Object Oriented Programming Using Java (CST205)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/Notes/HUT200"}>Professional Ethics (HUT200)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/Notes/MAT203"}>Discrete Mathematical Structures (MAT203)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/Notes/MCN201"}>Sustainable Engineering (MCN201)</Link> </li>
                </ul>       
            </div>
            <h2 className='mt-5 head_text font-bold text-black text-2xl'>Previous Year Question Papers :</h2>
            <div className='ml-5'>
                <ul className="list-disc ml-5 w-full">
                    <li> <Link href={"/studymaterial/S3/PreYearQuestion/CST201"}>Data Structures (CST201)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/PreYearQuestion/CST203"}>Logic System Design (CST203)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/PreYearQuestion/CST205"}>Object Oriented Programming Using Java (CST205)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/PreYearQuestion/HUT200"}>Professional Ethics (HUT200)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/PreYearQuestion/MAT203"}>Discrete Mathematical Structures (MAT203)</Link> </li>
                    <li> <Link href={"/studymaterial/S3/PreYearQuestion/MCN201"}>Sustainable Engineering (MCN201)</Link> </li>
                </ul>       
            </div>
            <h2 className='mt-5 head_text font-bold text-black text-2xl'>Lab :</h2>
            <div className='ml-5'>
                <ul className="list-disc ml-5 w-full">
                    <li> <Link href={"https://github.com/aces2022/ktu-s3-csl-201-ds-lab"}>Data Structures Lab (CSL201)</Link> </li>
                    <li> <Link href={"https://github.com/aces2022/ktu-s3-csl-203-oop-lab"}>Object Oriented Programming Lab Using Java (CSL203)</Link> </li>
                </ul>
            </div>
        </section>
    )
}

export default page