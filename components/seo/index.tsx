import { configs } from 'configs'
import { NextSeo } from 'next-seo'

export const SEO = ({ title }) => {
  return <NextSeo titleTemplate={'%s | ' + configs.title} title={title} />
}
