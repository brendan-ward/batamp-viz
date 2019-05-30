import React from 'react'
import { Image } from 'rebass'

import { Columns, Column as BaseColumn, Flex } from 'components/Grid'
import { OutboundLink } from 'components/Link'
import styled, { themeGet } from 'style'
import CBILogo from 'images/cbi_logo.png'
import USFSLogo from 'images/usfs_logo.png'
import { Section as BaseSection } from './styles'

const Section = styled(BaseSection)`
  p {
    font-size: 0.9rem;
  }
`

const Column = styled(BaseColumn).attrs({
  width: ['100%', '100%', '30%'],
})``

const Logos = styled(Flex).attrs({ alignItems: 'center', flexWrap: 'wrap' })``

const Logo = styled(Image).attrs({
  my: ['0.5rem', '0.5rem', '0.5rem', 0],
  mx: ['1rem'],
})``

const About = () => (
  <Section>
    <Columns>
      <Column>
        <p>
          This application was created by{' '}
          <a href="mailto:bcward@consbio.org">Brendan C. Ward</a> at the&nbsp;
          <OutboundLink
            from="/"
            to="https://consbio.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conservation Biology Institute
          </OutboundLink>
          &nbsp; (CBI) in partnership with{' '}
          <a href="mailto:ted.weller@usda.gov">Ted Weller</a> at the&nbsp;
          <OutboundLink
            from="/"
            to=""
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. Department of Agriculture Forest Service - Pacific Southwest
            Research Station
          </OutboundLink>
          .
        </p>
      </Column>
      <Column>
        <Logos>
          <Logo src={CBILogo} alt="CBI logo" />
          <Logo src={USFSLogo} alt="USFS logo" />
        </Logos>
      </Column>
    </Columns>
  </Section>
)

export default About