import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import colors from './colors'

const Headline = ({ children, sectionTitle }) => {
  return (
    <h2
      css={css`
        border-bottom: 1px solid ${colors.headline};
        width: 74vw;
        font-weight: 300;
        color: ${colors.text};
        margin-top: 0;
        margin-bottom: 0.66em;
      `}
    >
      {sectionTitle && (
        <>
          <span
            css={{
              color: colors.accent
            }}
          >
            {sectionTitle}
          </span>
          {children && <span> - </span>}
        </>
      )}
      {children}
    </h2>
  )
}

export default Headline
