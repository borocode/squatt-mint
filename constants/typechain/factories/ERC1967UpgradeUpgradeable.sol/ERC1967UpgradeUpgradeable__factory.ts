/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC1967UpgradeUpgradeable,
  ERC1967UpgradeUpgradeableInterface,
} from "../../ERC1967UpgradeUpgradeable.sol/ERC1967UpgradeUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
];

export class ERC1967UpgradeUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): ERC1967UpgradeUpgradeableInterface {
    return new utils.Interface(_abi) as ERC1967UpgradeUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1967UpgradeUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1967UpgradeUpgradeable;
  }
}
