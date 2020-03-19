import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import colors from './colors'

const Accent = ({ children }) => {
  return (
    <span
    css={{
      color: colors.accent
    }}>
    {children}
    </span>
  )
}

export default Accent
