import React from "react"
import styled from "styled-components"

interface Props {
  percentComplete: number
}

export class ProgressIndicator extends React.Component<Props, null> {
  static defaultProps = {
    percentComplete: 0,
  }

  render() {
    const { percentComplete } = this.props

    return (
      <ProgressIndicatorContainer>
        <CompletionBar percentComplete={percentComplete} />
      </ProgressIndicatorContainer>
    )
  }
}

const ProgressIndicatorContainer = styled.div`
  width: 100%;
  height: 6px;
  background-image: linear-gradient(
    45deg,
    gray 25%,
    transparent 25%,
    transparent 50%,
    gray 50%,
    gray 75%,
    transparent 75%,
    transparent
  );
  background-size: 4px 4px;
`

const CompletionBar = styled.div`
  width: ${(props: Props) => `calc(100% * ${props.percentComplete})`};
  height: 100%;
  background-color: black;
  transition: width 0.25s ease-in;
`

CompletionBar.displayName = "CompletionBar"