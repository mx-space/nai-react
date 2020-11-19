import { FC } from 'react'
import { configs } from '../../configs'

export const Footer: FC = () => {
  const y = new Date().getFullYear()
  return (
    <a href={configs.website}>
      <footer className={'text-text-gray font-serif text-xs pb-6 inline-block'}>
        Copyright © {y} Innei. Powered by NextJS.
      </footer>
    </a>
  )
}
