import Link from 'next/link';
import Image from '../components/Image'

const Index = () => (
    <div>
        <h1> SSR Magician </h1>
        <Link href='/about'>
            <a> About </a>
        </Link>
        <Link href='/robots'>
            <a> Robots </a>
        </Link>
        <Image />
    </div>
);

export default Index