import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Text } from 'components/Text'
import styled, { themeGet } from 'style'

export const Wrapper = styled(Text).attrs({
  textAlign: ['left', 'right'],
})`
  color: ${themeGet('colors.grey.600')};
  font-size: 0.8rem;
  /* padding: 0 1rem; */
  line-height: 1.2;
`

export const Option = styled.span`
  cursor: pointer;
  font-weight: bold;
  margin-left: 0.5em;

  color: ${({ active }) =>
    active ? themeGet('colors.highlight.500') : 'inherit'};

  &:not(:first-child) {
    padding-left: 0.5em;
    border-left: 1px solid ${themeGet('colors.grey.400')};
  }
`

const SortBar = ({ index, options, onChange }) => (
  <Wrapper>
    sort:
    {options.map((option, idx) => (
      <Option key={option} active={idx === index} onClick={() => onChange(idx)}>
        {option}
      </Option>
    ))}
  </Wrapper>
)

SortBar.propTypes = {
  index: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
}

// only rerender on index change
export default memo(
  SortBar,
  ({ index: prevIndex }, { index: nextIndex }) => prevIndex === nextIndex
)
