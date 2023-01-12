import { FaReact, FaHardHat } from 'react-icons/fa'
import { SiIpfs, SiSolidity, SiTailwindcss, SiFramer } from 'react-icons/si'
import { ether } from '../assets';


export type TechStackDataType = {
    image: JSX.Element | string;
    name: string;
}

export const TechStack: TechStackDataType[] = [
    {
        image: <FaReact />,
        name: "React-js"
    },
    {
        image: <SiIpfs />,
        name: "Ipfs"
    },
    {
        image: <SiSolidity />,
        name: "Solidity"
    },
    {
        image: <FaHardHat />,
        name: "Hardhat"
    },
    {
        image: <SiTailwindcss />,
        name: "Tailwind"
    },
    {
        image: <SiFramer />,
        name: "Framer"
    },
]