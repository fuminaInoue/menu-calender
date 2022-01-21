/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, jsx } from '@emotion/react'

type Props = {
}

export const Index: React.FC<Props> = ({}) => {
  return (
    <div css={headerStyle}>
      Hello!
    </div>
  )
}

const headerStyle = css({
  width: '100%',
  background: 'pink',
  height: 50
})
