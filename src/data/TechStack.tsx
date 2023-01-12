import { FaReact, FaHardHat } from 'react-icons/fa'
import { SiIpfs, SiSolidity, SiTailwindcss, SiFramer } from 'react-icons/si'
import { ether } from '../assets';


export type TechStackDataType = {
    image: JSX.Element | string;
    name: string;
    direction: string;
}

export const TechStack: TechStackDataType[] = [
    {
        image: <FaReact />,
        name: "React",
        direction: "right"
    },
    {
        image: <SiIpfs />,
        name: "Ipfs",
        direction: "right"
    },
    {
        image: <SiSolidity />,
        name: "Solidity",
        direction: "right"
    },
    {
        image: <FaHardHat />,
        name: "Hardhat",
        direction: "right"
    },
    {
        image: <SiTailwindcss />,
        name: "Tailwind",
        direction: "right"
    },
    {
        image: <SiFramer />,
        name: "Framer",
        direction: "right"
    },
]