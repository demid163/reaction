/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _ArtistSearchResultsContent_viewer$ref: unique symbol;
export type ArtistSearchResultsContent_viewer$ref = typeof _ArtistSearchResultsContent_viewer$ref;
export type ArtistSearchResultsContent_viewer = {
    readonly match_artist: ReadonlyArray<({
        readonly id: string;
        readonly _id: string;
        readonly __id: string;
        readonly name: string | null;
        readonly image: ({
            readonly cropped: ({
                readonly url: string | null;
            }) | null;
        }) | null;
    }) | null> | null;
    readonly " $refType": ArtistSearchResultsContent_viewer$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "ArtistSearchResultsContent_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "term",
      "type": "String!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "match_artist",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "term",
          "variableName": "term",
          "type": "String!"
        }
      ],
      "concreteType": "Artist",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "_id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "__id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "image",
          "storageKey": null,
          "args": null,
          "concreteType": "Image",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "cropped",
              "storageKey": "cropped(height:100,width:100)",
              "args": [
                {
                  "kind": "Literal",
                  "name": "height",
                  "value": 100,
                  "type": "Int!"
                },
                {
                  "kind": "Literal",
                  "name": "width",
                  "value": 100,
                  "type": "Int!"
                }
              ],
              "concreteType": "CroppedImageUrl",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = 'bfdccfa207bba7b1c084c6c0b44c4ffe';
export default node;
