const contracts = {
  // modifile here.
  84531: [
    {
      chainId: "84531",
      name: "baseGoerli",
      contracts: {
        VectorDBProposalGovernancer: {
          address: "0x604dcaEC4E9ad55737F00D87B47ae497d2d78608",
          abi: [
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_vectorName",
                  "type": "string"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "uuid",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "decide",
                  "type": "bool"
                }
              ],
              "name": "JudgeSet",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_uuid",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "_decide",
                  "type": "bool"
                }
              ],
              "name": "judgeTag",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_uuid",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_meta_data",
                  "type": "string"
                }
              ],
              "name": "tagItem",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "tagger",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "uuid",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "metadata",
                  "type": "string"
                }
              ],
              "name": "TagSet",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "chairperson",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vectorName",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
