import { NoteListPayload } from 'api/types'
import Link from 'next/link'
import { FC } from 'react'

export const NoteList: FC<{ notes: NoteListPayload }> = ({ notes }) => {
  return (
    <ul className={'list-root'}>
      {notes.map((note) => {
        const created = new Date(note.created)
        const day = created.getDate()
        const month = created.getMonth() + 1
        return (
          <li key={note._id}>
            <Link href={'/notes/[id]'} as={`/notes/${note.nid}`}>
              <a>
                <span className={'title'}>{note.title}</span>
                <span className={'created'}>{`${month}/${day}`}</span>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
