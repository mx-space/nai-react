import { getNoteContent } from 'api'
import { NoteContentPayload } from 'api/types'
import { notEqual } from 'assert'
import Markdown from 'components/markdown'
import { SEO } from 'components/seo'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React, { useMemo } from 'react'

interface NoteViewProps {
  data: NoteContentPayload
}
export const NoteView: NextPage<NoteViewProps> = ({ data }) => {
  if (!data) {
    return <p>404</p>
  }

  const formatTime = useMemo(() => {
    const d = new Date(data.created)

    const day = d.getDate()
    const month = d.getMonth() + 1
    const y = d.getFullYear()

    return `${y}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`
  }, [data.created])

  return (
    <div className={'content-wrapper'}>
      <SEO title={data.title} />
      <h1>{data.title}</h1>
      <div className={'time'}>{formatTime}</div>
      <article>
        <h1 style={{ display: 'none' }}>{data.title}</h1>
        <Markdown value={data.text} />
      </article>

      <div className={'notice'}>
        Visit Full version:{' '}
        <a
          href={`//innei.ren/notes/${data.nid}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://innei.ren/notes/{data.nid}
        </a>
      </div>
    </div>
  )
}

NoteView.getInitialProps = async (ctx) => {
  try {
    const payload = await getNoteContent(~~(ctx.query.id as any) as any)
    return { data: payload }
  } catch (e) {
    return {
      data: null as any,
    }
  }
}
export default NoteView
