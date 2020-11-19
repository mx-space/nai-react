import Link from 'next/link'
import { FC } from 'react'
import { configs } from '../../configs'

const Header: FC = () => {
  return (
    <header className={'header-wrapper'}>
      <Link href="/">
        <a>
          <h1>
            <span className="text-3xl">{configs.title}</span>
            <small className="text-sm">{configs.subtitle}</small>
          </h1>
        </a>
      </Link>

      <div className={'links'}>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href={configs.website} target={'_blank'}>
          Website
        </a>
      </div>
    </header>
  )
}

export default Header
