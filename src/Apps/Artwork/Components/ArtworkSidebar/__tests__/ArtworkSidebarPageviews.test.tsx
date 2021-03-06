import { ArtworkSidebarPageviewsFragmentContainer } from "Apps/Artwork/Components/ArtworkSidebar/ArtworkSidebarPageviews"
import { renderRelayTree } from "DevTools"
import { graphql } from "react-relay"

jest.unmock("react-relay")

describe("ArtworkSidebarArtists", () => {
  const getWrapper = async (response = { id: "blah", pageviews: 10 }) => {
    return await renderRelayTree({
      Component: ArtworkSidebarPageviewsFragmentContainer,
      query: graphql`
        query ArtworkSidebarPageviews_Test_Query {
          artwork(id: "blah") {
            ...ArtworkSidebarPageviews_artwork
          }
        }
      `,
      mockResolvers: {
        Artwork: () => response,
      },
    })
  }

  let wrapper

  describe("ArtworkSidebarPageviews with data", () => {
    beforeAll(async () => {
      wrapper = await getWrapper()
    })

    it("displays the pageview count and content", () => {
      const html = wrapper.html()
      expect(html).toContain("This work is getting noticed")
      expect(html).toMatch(/It has been viewed.*10 times.* this week/)
    })
  })
})
