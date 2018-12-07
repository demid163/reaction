import React from "react"
import { storiesOf } from "storybook/storiesOf"
import { Section } from "Styleguide/Utils/Section"
import { OtherWorksQueryRenderer as OtherWorks } from "../OtherWorks"
import { RelatedWorksArtworkGridQueryRenderer as RelatedWorksArtworkGrid } from "../OtherWorks/ArtworkContexts/ArtworkGrids/RelatedWorksArtworkGrid"

storiesOf("Styleguide/Artwork/OtherWorks", module)
  .add("Auctions", () => {
    return (
      <>
        <Section title="Open Auction">
          <OtherWorks artworkSlug="david-hockney-diptychon-3" />
        </Section>
        <Section title="Closed Auction">
          <OtherWorks artworkSlug="patrick-hughes-poppy-1" />
        </Section>
      </>
    )
  })
  .add("Artist", () => {
    return (
      <Section title="Artist">
        <OtherWorks artworkSlug="on-kawara-9-jan-1973" />
      </Section>
    )
  })
  .add("Fair", () => {
    return (
      <Section title="Fair">
        <OtherWorks artworkSlug="lucio-fontana-concetto-spaziale-attese-139" />
      </Section>
    )
  })
  .add("Partner Show (Gallery)", () => {
    return (
      <Section title="Gallery">
        <OtherWorks artworkSlug="david-hockney-early-morning-4" />
      </Section>
    )
  })
  .add("Related", () => {
    return (
      <Section title="Related">
        <RelatedWorksArtworkGrid artworkSlug="david-hockney-early-morning-4" />
      </Section>
    )
  })
