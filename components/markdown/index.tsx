import React, { FC, forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { spoiler } from './spoiler'

const RenderSpoiler: FC<{ value: string }> = (props) => {
  return (
    <span className={'spoiler'} title={'你知道的太多了'}>
      {props.value}
    </span>
  )
}
export const Markdown: FC<{ value: string }> = ({ value }) => {
  return (
    <ReactMarkdown
      source={value}
      escapeHtml={false}
      renderers={{
        spoiler: RenderSpoiler,
      }}
      plugins={[spoiler]}
    />
  )
}

export default Markdown
