# Bodhi Paper

<h4 align="center">
  <a href="https://paper.rootmud.xyz"> -[ Lanuch App ]- </a>
</h4>



Tokenized Paper, make paper/book as a company with shares, and could be reviewed by **everybody** .

> Smart Contracts:
>
> * bodhi: [0x6cF202C9f795D90B3c2C8e8364Cf77008B2c18b1](https://hashkeychain-testnet-explorer.alt.technology/address/0x6cF202C9f795D90B3c2C8e8364Cf77008B2c18b1?tab=contract_code)
>* on-chain-book(for onchain comments): [0xCE298aC4E50e2ad5e8608CCF914A7903eF672919](https://hashkeychain-testnet-explorer.alt.technology/address/0xCE298aC4E50e2ad5e8608CCF914A7903eF672919?tab=contract)

## Quickstart

如果您想快速体验我们的功能请通过：<a href="https://indiehacker.rootmud.xyz">Lanuch App</a>

## Frontend
### Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

To get started with Bodhi-Paper, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/SCIW3/bodhi-paper.git
cd bodhi-paper
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/explorer.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `OnChainBook.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`
