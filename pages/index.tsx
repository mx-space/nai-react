import { getNoteList } from 'api'
import { NoteListPayload, Pager } from 'api/types'
import clsx from 'clsx'
import { NoteList } from 'components/list'
import { configs } from 'configs'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'

// interface Action {
//   type: 'set'
//   payload: State
// }
// interface State {
//   notes: NoteListPayload
//   pager: Pager
// }
// const Reducer = () => {
//   const initial: State = {
//     notes: [] as NoteListPayload,
//     pager: {
//       hasNextPage: false,
//       hasPrevPage: false,
//       totalPage: 1,
//     } as Pager,
//   }

//   const [state, dispatch] = useReducer((state: State, action: Action) => {
//     switch (action.type) {
//       case 'set': {
//         const { notes, pager } = action.payload
//         state.notes = notes
//         state.pager = pager
//         return { ...state }
//       }

//       default:
//         return state
//     }
//   }, initial)

//   return [state, dispatch] as const
// }

interface HomeViewProps {
  notes: NoteListPayload
  pager: Pager
}

const HomeView: NextPage<HomeViewProps> = (props) => {
  const { notes } = props
  const data = props

  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(
    parseInt(router.query.page as any) || 1,
  )
  return (
    <Fragment>
      <NextSeo title={`${configs.title} | ${configs.subtitle}`} />
      <NoteList notes={notes} />

      <div className={'pager'}>
        <div
          className={clsx('prev', !data.pager.hasPrevPage && 'disable')}
          onClick={() => {
            if (!data.pager.hasPrevPage) {
              return
            }
            const page = currentPage - 1
            setCurrentPage(currentPage - 1)
            router.push({
              href: '/',
              query: {
                page: page,
              },
            })
          }}
        >
          上一页
        </div>
        <div
          className={clsx('next', !data.pager.hasNextPage && 'disable')}
          onClick={() => {
            if (!data.pager.hasNextPage) {
              return
            }
            const page = currentPage + 1
            setCurrentPage(currentPage + 1)
            router.push({
              href: '/',
              query: {
                page,
              },
            })
          }}
        >
          下一页
        </div>
      </div>
    </Fragment>
  )
}

HomeView.getInitialProps = async (ctx) => {
  const { query } = ctx
  const page = query.page as any

  const payload = await getNoteList(~~page || 1, 15)

  return { notes: payload.data, pager: payload.pager }
}
export default HomeView
