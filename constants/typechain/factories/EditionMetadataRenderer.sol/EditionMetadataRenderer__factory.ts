/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EditionMetadataRenderer,
  EditionMetadataRendererInterface,
} from "../../EditionMetadataRenderer.sol/EditionMetadataRenderer";

const _abi = [
  {
    inputs: [],
    name: "Access_OnlyAdmin",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newDescription",
        type: "string",
      },
    ],
    name: "DescriptionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
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
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "animationURI",
        type: "string",
      },
    ],
    name: "EditionInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "animationURI",
        type: "string",
      },
    ],
    name: "MediaURIsUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "contractURI",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializeWithData",
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
    name: "tokenInfos",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "animationURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "newDescription",
        type: "string",
      },
    ],
    name: "updateDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "animationURI",
        type: "string",
      },
    ],
    name: "updateMediaURIs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506121ff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063ba46ae7211610050578063ba46ae72146100b2578063c87b56dd146100dd578063e8a3d485146100fd57600080fd5b80632f17b8f014610077578063856a7ffa1461008c5780638bbb2cf21461009f575b600080fd5b61008a610085366004611569565b610105565b005b61008a61009a3660046115df565b6102bc565b61008a6100ad366004611628565b61038b565b6100c56100c0366004611678565b6104fe565b6040516100d4939291906116f1565b60405180910390f35b6100f06100eb36600461172a565b6106b8565b6040516100d49190611743565b6100f06109b5565b8273ffffffffffffffffffffffffffffffffffffffff811633148015906101b757506040517f24d7806c00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906324d7806c90602401602060405180830381865afa158015610191573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b5919061176b565b155b156101ee576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526020818152604090912084516102289260019092019186019061139b565b5073ffffffffffffffffffffffffffffffffffffffff841660009081526020818152604090912083516102639260029092019185019061139b565b508373ffffffffffffffffffffffffffffffffffffffff167fc4c1b9223fcebe5f35b9030d3df655018c40e88d70b8a3c63ed851c5d972210f3385856040516102ae93929190611786565b60405180910390a250505050565b6000806000838060200190518101906102d5919061180c565b604080516060810182528481526020808201859052818301849052336000908152808252929092208151805196995094975092955093919261031d928492919091019061139b565b506020828101518051610336926001850192019061139b565b506040820151805161035291600284019160209091019061139b565b50506040513391507ff889a5cdc62274389379cbfade0f225b1d30b7395177fd6aeaab61662b1c6edf906102ae908690869086906116f1565b8173ffffffffffffffffffffffffffffffffffffffff8116331480159061043d57506040517f24d7806c00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906324d7806c90602401602060405180830381865afa158015610417573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043b919061176b565b155b15610474576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831660009081526020818152604090912083516104a89285019061139b565b508273ffffffffffffffffffffffffffffffffffffffff167f36195b44a3184513e02477929207751ea9d67026b917ed74d374a7f9e8c5e4d133846040516104f192919061188a565b60405180910390a2505050565b600060208190529081526040902080548190610519906118b9565b80601f0160208091040260200160405190810160405280929190818152602001828054610545906118b9565b80156105925780601f1061056757610100808354040283529160200191610592565b820191906000526020600020905b81548152906001019060200180831161057557829003601f168201915b5050505050908060010180546105a7906118b9565b80601f01602080910402602001604051908101604052809291908181526020018280546105d3906118b9565b80156106205780601f106105f557610100808354040283529160200191610620565b820191906000526020600020905b81548152906001019060200180831161060357829003601f168201915b505050505090806002018054610635906118b9565b80601f0160208091040260200160405190810160405280929190818152602001828054610661906118b9565b80156106ae5780601f10610683576101008083540402835291602001916106ae565b820191906000526020600020905b81548152906001019060200180831161069157829003601f168201915b5050505050905083565b3360008181526020819052604080822081516060818101909352815492949392909190829082906106e8906118b9565b80601f0160208091040260200160405190810160405280929190818152602001828054610714906118b9565b80156107615780601f1061073657610100808354040283529160200191610761565b820191906000526020600020905b81548152906001019060200180831161074457829003601f168201915b5050505050815260200160018201805461077a906118b9565b80601f01602080910402602001604051908101604052809291908181526020018280546107a6906118b9565b80156107f35780601f106107c8576101008083540402835291602001916107f3565b820191906000526020600020905b8154815290600101906020018083116107d657829003601f168201915b5050505050815260200160028201805461080c906118b9565b80601f0160208091040260200160405190810160405280929190818152602001828054610838906118b9565b80156108855780601f1061085a57610100808354040283529160200191610885565b820191906000526020600020905b81548152906001019060200180831161086857829003601f168201915b5050505050815250509050600082905060008173ffffffffffffffffffffffffffffffffffffffff16633474a4a66040518163ffffffff1660e01b815260040161016060405180830381865afa1580156108e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109079190611925565b6101400151905067ffffffffffffffff811415610922575060005b6109ab8473ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015610970573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261099891908101906119de565b8451602086015160408701518a86610c7b565b9695505050505050565b3360008181526020819052604080822081517f79502c55000000000000000000000000000000000000000000000000000000008152915160609493919284916379502c55916004808201926080929091908290030181865afa158015610a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a439190611a13565b9050610c738373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a93573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610abb91908101906119de565b83548490610ac8906118b9565b80601f0160208091040260200160405190810160405280929190818152602001828054610af4906118b9565b8015610b415780601f10610b1657610100808354040283529160200191610b41565b820191906000526020600020905b815481529060010190602001808311610b2457829003601f168201915b5050505050846001018054610b55906118b9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b81906118b9565b8015610bce5780601f10610ba357610100808354040283529160200191610bce565b820191906000526020600020905b815481529060010190602001808311610bb157829003601f168201915b5050505050856002018054610be2906118b9565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0e906118b9565b8015610c5b5780601f10610c3057610100808354040283529160200191610c5b565b820191906000526020600020905b815481529060010190602001808311610c3e57829003601f168201915b5050505050856040015161ffff168660600151610cb2565b935050505090565b60606000610c898686610d82565b90506000610c9a8989848888610e12565b9050610ca581610e8e565b9998505050505050505050565b60408051602081019091526000815284516060919015610cef5785604051602001610cdd9190611ab9565b60405160208183030381529060405290505b604080516020810190915260008152855115610d285785604051602001610d169190611afe565b60405160208183030381529060405290505b610ca58989610d3688610ebf565b610d578873ffffffffffffffffffffffffffffffffffffffff166014610ff9565b8686604051602001610d6e96959493929190611b43565b604051602081830303815290604052610e8e565b81518151606091158015911515908290610d995750805b15610dc9578484604051602001610db1929190611c9d565b60405160208183030381529060405292505050610e0c565b8115610de05784604051602001610db19190611d48565b8015610df75783604051602001610db19190611db4565b60405180602001604052806000815250925050505b92915050565b6060808215610e4657610e2483610ebf565b604051602001610e349190611e20565b60405160208183030381529060405290505b86610e5085610ebf565b828888610e5c89610ebf565b8c604051602001610e739796959493929190611e65565b60405160208183030381529060405291505095945050505050565b6060610e9982611247565b604051602001610ea9919061200f565b6040516020818303038152906040529050919050565b606081610eff57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610f295780610f1381612083565b9150610f229050600a836120cd565b9150610f03565b60008167ffffffffffffffff811115610f4457610f44611459565b6040519080825280601f01601f191660200182016040528015610f6e576020820181803683370190505b5090505b8415610ff157610f836001836120e1565b9150610f90600a866120f8565b610f9b90603061210c565b60f81b818381518110610fb057610fb0612124565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610fea600a866120cd565b9450610f72565b949350505050565b60606000611008836002612153565b61101390600261210c565b67ffffffffffffffff81111561102b5761102b611459565b6040519080825280601f01601f191660200182016040528015611055576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061108c5761108c612124565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106110ef576110ef612124565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600061112b846002612153565b61113690600161210c565b90505b60018111156111d3577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061117757611177612124565b1a60f81b82828151811061118d5761118d612124565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936111cc81612172565b9050611139565b508315611240576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640160405180910390fd5b9392505050565b606081516000141561126757505060408051602081019091526000815290565b600060405180606001604052806040815260200161218a6040913990506000600384516002611296919061210c565b6112a091906120cd565b6112ab906004612153565b67ffffffffffffffff8111156112c3576112c3611459565b6040519080825280601f01601f1916602001820160405280156112ed576020820181803683370190505b509050600182016020820185865187015b80821015611359576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453506001830192506112fe565b5050600386510660018114611375576002811461138857611390565b603d6001830353603d6002830353611390565b603d60018303535b509195945050505050565b8280546113a7906118b9565b90600052602060002090601f0160209004810192826113c9576000855561140f565b82601f106113e257805160ff191683800117855561140f565b8280016001018555821561140f579182015b8281111561140f5782518255916020019190600101906113f4565b5061141b92915061141f565b5090565b5b8082111561141b5760008155600101611420565b73ffffffffffffffffffffffffffffffffffffffff8116811461145657600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610160810167ffffffffffffffff811182821017156114ac576114ac611459565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156114db576114db611459565b604052919050565b600067ffffffffffffffff8211156114fd576114fd611459565b50601f01601f191660200190565b600061151e611519846114e3565b6114b2565b905082815283838301111561153257600080fd5b828260208301376000602084830101529392505050565b600082601f83011261155a57600080fd5b6112408383356020850161150b565b60008060006060848603121561157e57600080fd5b833561158981611434565b9250602084013567ffffffffffffffff808211156115a657600080fd5b6115b287838801611549565b935060408601359150808211156115c857600080fd5b506115d586828701611549565b9150509250925092565b6000602082840312156115f157600080fd5b813567ffffffffffffffff81111561160857600080fd5b8201601f8101841361161957600080fd5b610ff18482356020840161150b565b6000806040838503121561163b57600080fd5b823561164681611434565b9150602083013567ffffffffffffffff81111561166257600080fd5b61166e85828601611549565b9150509250929050565b60006020828403121561168a57600080fd5b813561124081611434565b60005b838110156116b0578181015183820152602001611698565b838111156116bf576000848401525b50505050565b600081518084526116dd816020860160208601611695565b601f01601f19169290920160200192915050565b60608152600061170460608301866116c5565b828103602084015261171681866116c5565b905082810360408401526109ab81856116c5565b60006020828403121561173c57600080fd5b5035919050565b60208152600061124060208301846116c5565b8051801515811461176657600080fd5b919050565b60006020828403121561177d57600080fd5b61124082611756565b73ffffffffffffffffffffffffffffffffffffffff841681526060602082015260006117b560608301856116c5565b82810360408401526109ab81856116c5565b600082601f8301126117d857600080fd5b81516117e6611519826114e3565b8181528460208386010111156117fb57600080fd5b610ff1826020830160208701611695565b60008060006060848603121561182157600080fd5b835167ffffffffffffffff8082111561183957600080fd5b611845878388016117c7565b9450602086015191508082111561185b57600080fd5b611867878388016117c7565b9350604086015191508082111561187d57600080fd5b506115d5868287016117c7565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000610ff160408301846116c5565b600181811c908216806118cd57607f821691505b60208210811415611907577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b805167ffffffffffffffff8116811461176657600080fd5b6000610160828403121561193857600080fd5b611940611488565b61194983611756565b815261195760208401611756565b6020820152604083015160408201526119726060840161190d565b60608201526119836080840161190d565b608082015261199460a0840161190d565b60a08201526119a560c0840161190d565b60c082015260e0838101519082015261010080840151908201526101208084015190820152610140928301519281019290925250919050565b6000602082840312156119f057600080fd5b815167ffffffffffffffff811115611a0757600080fd5b610ff1848285016117c7565b600060808284031215611a2557600080fd5b6040516080810181811067ffffffffffffffff82111715611a4857611a48611459565b6040528251611a5681611434565b8152611a646020840161190d565b6020820152604083015161ffff81168114611a7e57600080fd5b60408201526060830151611a9181611434565b60608201529392505050565b60008151611aaf818560208601611695565b9290920192915050565b7f222c2022696d616765223a202200000000000000000000000000000000000000815260008251611af181600d850160208701611695565b91909101600d0192915050565b7f222c2022616e696d6174696f6e5f75726c223a20220000000000000000000000815260008251611b36816015850160208701611695565b9190910160150192915050565b7f7b226e616d65223a2022000000000000000000000000000000000000000000008152600087516020611b7c82600a8601838d01611695565b7f222c20226465736372697074696f6e223a202200000000000000000000000000600a928501928301528851611bb881601d8501848d01611695565b7f222c202273656c6c65725f6665655f62617369735f706f696e7473223a200000601d93909101928301528751611bf581603b8501848c01611695565b7f2c20226665655f726563697069656e74223a2022000000000000000000000000603b93909101928301528651611c3281604f8501848b01611695565b8651920191611c4781604f8501848a01611695565b8551920191611c5c81604f8501848901611695565b611c8e604f828501017f227d000000000000000000000000000000000000000000000000000000000000815260020190565b9b9a5050505050505050505050565b7f696d616765223a20220000000000000000000000000000000000000000000000815260008351611cd5816009850160208801611695565b7f222c2022616e696d6174696f6e5f75726c223a202200000000000000000000006009918401918201528351611d1281601e840160208801611695565b7f222c202200000000000000000000000000000000000000000000000000000000601e9290910191820152602201949350505050565b7f696d616765223a20220000000000000000000000000000000000000000000000815260008251611d80816009850160208701611695565b7f222c2022000000000000000000000000000000000000000000000000000000006009939091019283015250600d01919050565b7f616e696d6174696f6e5f75726c223a2022000000000000000000000000000000815260008251611dec816011850160208701611695565b7f222c2022000000000000000000000000000000000000000000000000000000006011939091019283015250601501919050565b7f2f00000000000000000000000000000000000000000000000000000000000000815260008251611e58816001850160208701611695565b9190910160010192915050565b7f7b226e616d65223a202200000000000000000000000000000000000000000000815260008851611e9d81600a850160208d01611695565b7f2000000000000000000000000000000000000000000000000000000000000000600a918401918201528851611eda81600b840160208d01611695565b8851910190611ef081600b840160208c01611695565b8082019150507f222c20220000000000000000000000000000000000000000000000000000000080600b8301527f6465736372697074696f6e223a20220000000000000000000000000000000000600f8301528751611f5681601e850160208c01611695565b601e920191820152612001611fd8611fd2611fa9611fa3611f7a602287018c611a9d565b7f70726f70657274696573223a207b226e756d626572223a200000000000000000815260180190565b89611a9d565b7f2c20226e616d65223a20220000000000000000000000000000000000000000008152600b0190565b86611a9d565b7f227d7d0000000000000000000000000000000000000000000000000000000000815260030190565b9a9950505050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161204781601d850160208701611695565b91909101601d0192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060001982141561209757612097612054565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826120dc576120dc61209e565b500490565b6000828210156120f3576120f3612054565b500390565b6000826121075761210761209e565b500690565b6000821982111561211f5761211f612054565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081600019048311821515161561216d5761216d612054565b500290565b60008161218157612181612054565b50600019019056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220d83fe8cccff8d06196fbf45ce10bf30f7b83d8624c7a61ec0f15734d291e279464736f6c634300080a0033";

type EditionMetadataRendererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EditionMetadataRendererConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EditionMetadataRenderer__factory extends ContractFactory {
  constructor(...args: EditionMetadataRendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EditionMetadataRenderer> {
    return super.deploy(overrides || {}) as Promise<EditionMetadataRenderer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EditionMetadataRenderer {
    return super.attach(address) as EditionMetadataRenderer;
  }
  override connect(signer: Signer): EditionMetadataRenderer__factory {
    return super.connect(signer) as EditionMetadataRenderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EditionMetadataRendererInterface {
    return new utils.Interface(_abi) as EditionMetadataRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EditionMetadataRenderer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EditionMetadataRenderer;
  }
}
