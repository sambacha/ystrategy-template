# Solidity TypeScript Template [Truffle Suite]

[![Build Status](https://travis-ci.com/ilyakmet/solidity-typescript-template.svg?branch=trufflesuite)](https://travis-ci.com/ilyakmet/solidity-typescript-template)
[![codecov](https://codecov.io/gh/ilyakmet/solidity-typescript-template/branch/trufflesuite/graph/badge.svg)](https://codecov.io/gh/ilyakmet/solidity-typescript-template)

## Developer Tools 🛠️

- [Truffle](https://trufflesuite.com/)
- [TypeChain](https://github.com/ethereum-ts/TypeChain)
- [Openzeppelin Contracts](https://openzeppelin.com/contracts/)

## Start

Create `.infura` and `.secret` files. Install the dependencies:

```bash
$ yarn
```

## Tests

```bash
$ yarn test
```

## Coverage

```bash
$ yarn coverage
```

## Deploying

Deploy to Kovan:

```bash
$ NETWORK=kovan yarn deploy
```

## Verifying Contract Code

```bash
$ NETWORK=kovan yarn run verify YourContractName
```
