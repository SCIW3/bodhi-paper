// 10: [
//   {
//     chainId: "10",
//     name: "Optimism",
//     contracts: {
//       // Hint: config here.
//       OnChainBook: {
//         address: "0x505d9Ae884AC1A7f243152A24E0A1Cbd1d04Cc6C",
const contracts = {
  133: [
    {
      chainId: "133",
      name: "hashkeyTestnet",
      contracts: {
        // Hint: config here.
        OnChainBook: {
          address: "0xCE298aC4E50e2ad5e8608CCF914A7903eF672919",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "bodhiId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string[]",
                  name: "fullContentArweaveIds",
                  type: "string[]",
                },
              ],
              name: "BookCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string[]",
                  name: "fullContentArweaveIds",
                  type: "string[]",
                },
              ],
              name: "BookUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "lineNum",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "referWord",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "timestamp",
                  type: "string",
                },
              ],
              name: "CommentAdded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "lineNum",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "referWord",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "timestamp",
                  type: "string",
                },
              ],
              name: "addComment",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "book",
              outputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "bodhiId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "commentCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "comments",
              outputs: [
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lineNum",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "referWord",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "timestamp",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_bodhiId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "_fullContentArweaveIds",
                  type: "string[]",
                },
              ],
              name: "createBook",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "_fullContentArweaveIds",
                  type: "string[]",
                },
              ],
              name: "updateBook",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Bodhi: {
          address: "0x6cF202C9f795D90B3c2C8e8364Cf77008B2c18b1",
          abi: [
            {
              inputs: [],
              name: "Unauthorized",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "arTxId",
                  type: "string",
                },
              ],
              name: "Create",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "Remove",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "enum Bodhi.TradeType",
                  name: "tradeType",
                  type: "uint8",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "ethAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "creatorFee",
                  type: "uint256",
                },
              ],
              name: "Trade",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [],
              name: "CREATOR_FEE_PERCENT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "CREATOR_PREMINT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "assetIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "assets",
              outputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "arTxId",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "balances",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "buy",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "arTxId",
                  type: "string",
                },
              ],
              name: "create",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
              ],
              name: "getAssetIdsByAddress",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "getBuyPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "getBuyPriceAfterFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "supply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "getPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "getSellPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "getSellPriceAfterFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "pool",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
              ],
              name: "remove",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "assetId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "sell",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "txToAssetId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "userAssets",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
