import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.section`
  grid-area: ResumeBodyTop;
  margin: 0;
  padding: 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 3.5rem 0 0;
  }
`
const Body = styled.div`
margin: 0 auto;
padding: 2rem 0 2rem;
h1,
h2,
h3 {
  font-weight: 800;
  line-height: 1.25;
  text-transform: capitalize;
  margin: 0.5rem 0 1rem 0;
}

p {
  line-height: 1.6;
  margin: 1rem 0;
  font-size: 1.1rem;
}

a {
  transition: 0.2s;
  color: var(--color-tertiary);
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
  text-shadow: 1px 1px 0 var(--color-base), -1px 1px 0 var(--color-base),
    2px 0 0 var(--color-base), -2px 0 0 var(--color-base);
  box-shadow: inset 0 -1px 0 0 var(--color-base),
    inset 0 -2px 0 0 var(--color-tertiary);
  &:hover {
    color: var(--color-highlight);
    box-shadow: inset 0 -1px 0 0 var(--color-base),
      inset 0 -2px 0 0 var(--color-highlight);
  }
}

del {
  text-decoration: line-through;
}
strong {
  font-weight: 800;
}
em {
  font-style: italic;
}

ul,
ol {
  margin: 0 0 2em 0;
}

ul {
  li {
    list-style: disc;
    list-style-position: inside;
    line-height: 1.25;
    &:last-child {
      margin: 0;
    }
  }
}

ol {
  li {
    list-style: decimal;
    list-style-position: inside;
    line-height: 1.25;
    &:last-child {
      margin: 0;
    }
  }
}

hr {
  border-style: solid;
  border-color: var(--color-secondary);
  margin: 0 0 2em 0;
}

blockquote {
  font-style: italic;
  border-left: 4px solid var(--color-highlight);
  padding: 0 0 0 0.5em;
  width: calc(100vw - 4rem);
  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: 100%;
  }
}
pre,
code {
  width: calc(100vw - 4rem);
  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: 100%;
  }
}
img {
  box-shadow: 10px 5px 5px red;
  padding: 0.5rem;
}
@media (min-width: ${props => props.theme.responsive.medium}) {
  overflow-x: auto;
  width: auto;
  max-width: 75vw;
}
`

const ContactBodyTop = props => {
  return (
    <Wrapper>
      <Body
        dangerouslySetInnerHTML={{
          __html: props.body.childMarkdownRemark.html,
        }}
      />
    </Wrapper>
  )
}

export default ContactBodyTop
