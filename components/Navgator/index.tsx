import Link from 'next/link'

import Image from 'next/image';
import Logo from '../../public/img/carvalho-e-marcelino.png';
import styles from '../../styles/Navgator.module.css';

export default function Navgator() {
  return (
    <nav className={styles.navgator}>
      <Link href="/">
        <a>
          <Image src={Logo} alt="logo" width={248} height={58} />
        </a>
      </Link>
      <ol className={styles.navlist}>
        <li className={styles.listItems}><Link href="/blog"><a>Blog</a></Link></li>
        <li className={styles.listItems}><Link href="/atuacao"><a>Áreas de atuação</a></Link></li>
        <li className={styles.listItems}><Link href="/equipe"><a>Nossa equipe</a></Link></li>
        <li className={styles.listItems}><Link href="/redes-sociais"><a>Nossas redes</a></Link></li>
      </ol>
    </nav>
  )
}