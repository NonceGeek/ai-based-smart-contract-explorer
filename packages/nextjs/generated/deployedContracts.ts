const contracts = {
  // modifile here.
  534351: [
    {
      chainId: "534351",
      name: "scrollSepolia",
      contracts: {
        VectorDBProposalGovernancer: {
          address: "0xEd6a0A29A962B4296bCeEC4e1E55F5Ec0474EAC7",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "chairperson",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_content",
                  type: "string",
                },
              ],
              name: "createProposal",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "delegate",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint32",
                  name: "id",
                  type: "uint32",
                },
              ],
              name: "getProposal",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "content",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "proposaler",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "voteCount",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct YourContract.Proposal",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "voter",
                  type: "address",
                },
              ],
              name: "giveRightToVote",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "proposals",
              outputs: [
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "proposaler",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "voteCount",
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
                  name: "proposal",
                  type: "uint256",
                },
              ],
              name: "vote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "voters",
              outputs: [
                {
                  internalType: "uint256",
                  name: "weight",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "voted",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "delegate",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "vote",
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
