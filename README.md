# 🧎 Rishad Squatt — Official Mint dApp

> **"999 Rishads. Collect." — Revived standalone Web3 mint frontend for Rishad Squatt on Ethereum Mainnet.**

[![Deploy](https://github.com/borocode/squatt-mint/actions/workflows/deploy.yml/badge.svg)](https://github.com/borocode/squatt-mint/actions)
[![Ethereum](https://img.shields.io/badge/Ethereum-Mainnet-627EEA.svg?logo=ethereum)](https://etherscan.io/address/0xeb051df4f4a5de7bdc462c947e551085ba3a9664)
[![OpenSea](https://img.shields.io/badge/OpenSea-Collection-2081E2.svg?logo=opensea)](https://opensea.io/collection/rishad-squatt)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌐 Live Mint dApp
👉 **[borocode.github.io/squatt-mint](https://borocode.github.io/squatt-mint)**

---

## ⚡ Smart Contract Details

| Parameter | Value |
| :--- | :--- |
| **Contract Address** | [`0xeb051df4f4a5de7bdc462c947e551085ba3a9664`](https://etherscan.io/address/0xeb051df4f4a5de7bdc462c947e551085ba3a9664) |
| **Token Standard** | ERC-721 Drop (Zora Protocol V1) |
| **Network** | Ethereum Mainnet (Chain ID: `1`) |
| **Total Max Supply** | `999` |
| **Mint Price** | `0.400777 ETH` (`0.4 ETH` creator + `0.000777 ETH` Zora fee) |
| **IPFS Metadata** | `ipfs://bafybeigqc34gt6boy5fwjrbgj3qmn3llsou4y2gw3uvzhbbnx3prfg7xvm/metadata` |

---

## ✨ Features

- 🔌 **Zero Subgraph Dependencies:** Direct Ethereum Mainnet RPC queries with automatic fallback providers.
- 🦊 **Multi-Wallet Support:** Connects with MetaMask, Coinbase Wallet, Rainbow, Rabby, and Phantom.
- 📊 **Real-Time On-Chain Telemetry:** Dynamically reads live minted count, total supply, and remaining tokens.
- 🎉 **Instant Minting & Celebration:** Interactive quantity picker (`1` to `10`), one-click minting, dynamic gas calculation, Etherscan link tracking, and confetti celebration upon confirmation.
- 🚀 **Zero Build Step:** Standalone static HTML5/ES6 application ready to serve on GitHub Pages, Vercel, or custom domains.

---

## 💻 Local Development

Run any static HTTP server:
```bash
# Python
python -m http.server 3000

# Node
npx serve .
```

Open `http://localhost:3000` in your browser.

---

## 📜 License

[MIT](LICENSE) © 2026 [borocode](https://github.com/borocode)
