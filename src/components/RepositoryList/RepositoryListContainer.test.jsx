import React from "react";
import { RepositoryListContainer } from "./RepositoryList";
import { render } from "@testing-library/react-native";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const { debug, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      expect(getAllByTestId("repositoryName")[0]).toHaveTextContent(
        "jaredpalmer/formik"
      );
      expect(getAllByTestId("repositoryLanguage")[0]).toHaveTextContent(
        "TypeScript"
      );
      expect(getAllByTestId("repositoryStars")[0]).toHaveTextContent("21.9K");
      expect(getAllByTestId("repositoryForks")[0]).toHaveTextContent("1.6K");
      expect(getAllByTestId("repositoryReviews")[0]).toHaveTextContent("3");
      expect(getAllByTestId("repositoryRatingAvg")[0]).toHaveTextContent("88");

      // the second repo provided
      expect(getAllByTestId("repositoryName")[1]).toHaveTextContent(
        "async-library/react-async"
      );
      expect(getAllByTestId("repositoryLanguage")[1]).toHaveTextContent(
        "JavaScript"
      );
      expect(getAllByTestId("repositoryStars")[1]).toHaveTextContent("1.8K");
      expect(getAllByTestId("repositoryForks")[1]).toHaveTextContent("69");
      expect(getAllByTestId("repositoryReviews")[1]).toHaveTextContent("3");
      expect(getAllByTestId("repositoryRatingAvg")[1]).toHaveTextContent("72");
    });
  });
});
