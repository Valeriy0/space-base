export const sclixSaleAbi = {
  "contractName": "SClixSale",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "idUser",
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
      "name": "impl",
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
      "name": "lastId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nft",
      "outputs": [
        {
          "internalType": "contract ISClix",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nftId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
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
      "name": "price",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "receiver",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userReferral",
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
      "inputs": [
        {
          "internalType": "contract ISClix",
          "name": "_nft",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_nftId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "setSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "refAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "buy",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.18+commit.87f61d96\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"refAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"buy\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"idUser\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"impl\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract ISClix\",\"name\":\"_nft\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"init\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lastId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nft\",\"outputs\":[{\"internalType\":\"contract ISClix\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nftId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"price\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"receiver\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_nftId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_price\",\"type\":\"uint256\"}],\"name\":\"setSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userReferral\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/SClix.sol\":\"SClixSale\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32\",\"dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz\"]},\"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\":{\"keccak256\":\"0x81149353c99ccf8ff18af7701bc3f38665c7a97e344cdc0d27f927f03d22af0e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b488da93995672b613897afa8ed85bb10442351ed54124001832bf2944108601\",\"dweb:/ipfs/QmP2fX6BzbgZyskxXqckeMzC1C3g7wKEbdtZfMegHoGW3j\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0xcab667ddad478ff0d39c2053ca77fac778af8483c18ab07d810277b4216fd582\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://919c7ea27c77275c3c341da0c4a26a66a20ed27605fbe8becf11f58ec3bc65bf\",\"dweb:/ipfs/QmRLKyVE2n7e2Jo4bLNn8eLgqqhNGYnVQyjJPWdr8poskf\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0xeb373f1fdc7b755c6a750123a9b9e3a8a02c1470042fd6505d875000a80bde0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e28648f994abf1d6bc345644a361cc0b7efa544f8bc0c8ec26011fed85a91ec\",\"dweb:/ipfs/QmVVE7AiRjKaQYYji7TkjmTeVzGpNmms5eoxqTCfvvpj6D\"]},\"@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"keccak256\":\"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e46c80ea068989111d6103e5521223f9ef337e93de76deed8b03f75c6f7b2797\",\"dweb:/ipfs/QmNoSE6knNfFncdDDLTb3fGR6oSQty1srG96Vsx3E9wQdw\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x006dd67219697fe68d7fbfdea512e7c4cb64a43565ed86171d67e844982da6fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2455248c8ddd9cc6a7af76a13973cddf222072427e7b0e2a7d1aff345145e931\",\"dweb:/ipfs/QmfYjnjRbWqYpuxurqveE6HtzsY1Xx323J428AKQgtBJZm\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f\",\"dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c\",\"dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS\"]},\"@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"project:/contracts/Proxy.sol\":{\"keccak256\":\"0xdb9f65c4f0a62d4a9c168134272c616d966b76c7d11c68ff53a01d69628e5a6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://006b5c1a674737c0701bbced5f432102321a5ba2e4d8c211aa74888c8d87fa9a\",\"dweb:/ipfs/Qmbm7kWuULDq5bfk1eMczFxqhANim6EtgRgJ7t2LjsZLLQ\"]},\"project:/contracts/SClix.sol\":{\"keccak256\":\"0x44d12762fd05cbfd93666e3fc917d381d1f5bbc3f9980e08a8903f28ca930fd0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fd405bb3f0f08558c19525a45f4848e6e4d6517226dced52910e311ee64e8d36\",\"dweb:/ipfs/Qmf8HhWEArPubccQCoyaCtKBFeFtedDrNywLKzu11JrSTo\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61081a8061007e6000396000f3fe6080604052600436106100e85760003560e01c8063a035b1fe1161008a578063f09a401611610059578063f09a40161461027b578063f2fde38b1461029b578063f7260d3e146102bb578063f901a18f146102db57600080fd5b8063a035b1fe14610226578063c1292cc31461023c578063c6bc518214610252578063cce7ec131461026857600080fd5b8063715018a6116100c6578063715018a61461019b5780638abf6077146101b25780638da5cb5b146101d257806398a3adce146101f057600080fd5b806334c8c3ae146100ed578063376fe1021461014057806347ccca021461017b575b600080fd5b3480156100f957600080fd5b506101236101083660046106d4565b6009602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561014c57600080fd5b5061016d61015b3660046106d4565b60076020526000908152604090205481565b604051908152602001610137565b34801561018757600080fd5b50600254610123906001600160a01b031681565b3480156101a757600080fd5b506101b06102fb565b005b3480156101be57600080fd5b50600154610123906001600160a01b031681565b3480156101de57600080fd5b506000546001600160a01b0316610123565b3480156101fc57600080fd5b5061012361020b3660046106f8565b6008602052600090815260409020546001600160a01b031681565b34801561023257600080fd5b5061016d60055481565b34801561024857600080fd5b5061016d60065481565b34801561025e57600080fd5b5061016d60045481565b6101b0610276366004610711565b61030f565b34801561028757600080fd5b506101b061029636600461073d565b610553565b3480156102a757600080fd5b506101b06102b63660046106d4565b610589565b3480156102c757600080fd5b50600354610123906001600160a01b031681565b3480156102e757600080fd5b506101b06102f6366004610776565b610602565b610303610615565b61030d600061066f565b565b6000600454116103545760405162461bcd60e51b815260206004820152600b60248201526a1cd85b194818db1bdcd95960aa1b60448201526064015b60405180910390fd5b8060055461036291906107ae565b34146103a05760405162461bcd60e51b815260206004820152600d60248201526c696e76616c69642076616c756560981b604482015260640161034b565b3360009081526007602052604081205490036104a657600680549060006103c6836107cb565b90915550506006546001600160a01b0383166000908152600760205260409020541061042a5760405162461bcd60e51b8152602060048201526013602482015272696e76616c696420726566206164647265737360681b604482015260640161034b565b6001600160a01b038216600090815260076020526040902054156104715733600090815260096020526040902080546001600160a01b0319166001600160a01b0384161790555b600654336000818152600760209081526040808320859055938252600890529190912080546001600160a01b03191690911790555b6003546040516001600160a01b03909116903480156108fc02916000818181858888f193505050501580156104df573d6000803e3d6000fd5b5060025460048054604051630ab714fb60e11b815233928101929092526024820152604481018390526001600160a01b039091169063156e29f690606401600060405180830381600087803b15801561053757600080fd5b505af115801561054b573d6000803e3d6000fd5b505050505050565b61055b610615565b600280546001600160a01b039384166001600160a01b03199182161790915560038054929093169116179055565b610591610615565b6001600160a01b0381166105f65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161034b565b6105ff8161066f565b50565b61060a610615565b600491909155600555565b6000546001600160a01b0316331461030d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146105ff57600080fd5b6000602082840312156106e657600080fd5b81356106f1816106bf565b9392505050565b60006020828403121561070a57600080fd5b5035919050565b6000806040838503121561072457600080fd5b823561072f816106bf565b946020939093013593505050565b6000806040838503121561075057600080fd5b823561075b816106bf565b9150602083013561076b816106bf565b809150509250929050565b6000806040838503121561078957600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176107c5576107c5610798565b92915050565b6000600182016107dd576107dd610798565b506001019056fea26469706673582212204db57eeeb53949f28c331802e76fd91df6bc01eafb48e945e1d29ce972176ad964736f6c63430008120033",
  "deployedBytecode": "0x6080604052600436106100e85760003560e01c8063a035b1fe1161008a578063f09a401611610059578063f09a40161461027b578063f2fde38b1461029b578063f7260d3e146102bb578063f901a18f146102db57600080fd5b8063a035b1fe14610226578063c1292cc31461023c578063c6bc518214610252578063cce7ec131461026857600080fd5b8063715018a6116100c6578063715018a61461019b5780638abf6077146101b25780638da5cb5b146101d257806398a3adce146101f057600080fd5b806334c8c3ae146100ed578063376fe1021461014057806347ccca021461017b575b600080fd5b3480156100f957600080fd5b506101236101083660046106d4565b6009602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561014c57600080fd5b5061016d61015b3660046106d4565b60076020526000908152604090205481565b604051908152602001610137565b34801561018757600080fd5b50600254610123906001600160a01b031681565b3480156101a757600080fd5b506101b06102fb565b005b3480156101be57600080fd5b50600154610123906001600160a01b031681565b3480156101de57600080fd5b506000546001600160a01b0316610123565b3480156101fc57600080fd5b5061012361020b3660046106f8565b6008602052600090815260409020546001600160a01b031681565b34801561023257600080fd5b5061016d60055481565b34801561024857600080fd5b5061016d60065481565b34801561025e57600080fd5b5061016d60045481565b6101b0610276366004610711565b61030f565b34801561028757600080fd5b506101b061029636600461073d565b610553565b3480156102a757600080fd5b506101b06102b63660046106d4565b610589565b3480156102c757600080fd5b50600354610123906001600160a01b031681565b3480156102e757600080fd5b506101b06102f6366004610776565b610602565b610303610615565b61030d600061066f565b565b6000600454116103545760405162461bcd60e51b815260206004820152600b60248201526a1cd85b194818db1bdcd95960aa1b60448201526064015b60405180910390fd5b8060055461036291906107ae565b34146103a05760405162461bcd60e51b815260206004820152600d60248201526c696e76616c69642076616c756560981b604482015260640161034b565b3360009081526007602052604081205490036104a657600680549060006103c6836107cb565b90915550506006546001600160a01b0383166000908152600760205260409020541061042a5760405162461bcd60e51b8152602060048201526013602482015272696e76616c696420726566206164647265737360681b604482015260640161034b565b6001600160a01b038216600090815260076020526040902054156104715733600090815260096020526040902080546001600160a01b0319166001600160a01b0384161790555b600654336000818152600760209081526040808320859055938252600890529190912080546001600160a01b03191690911790555b6003546040516001600160a01b03909116903480156108fc02916000818181858888f193505050501580156104df573d6000803e3d6000fd5b5060025460048054604051630ab714fb60e11b815233928101929092526024820152604481018390526001600160a01b039091169063156e29f690606401600060405180830381600087803b15801561053757600080fd5b505af115801561054b573d6000803e3d6000fd5b505050505050565b61055b610615565b600280546001600160a01b039384166001600160a01b03199182161790915560038054929093169116179055565b610591610615565b6001600160a01b0381166105f65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161034b565b6105ff8161066f565b50565b61060a610615565b600491909155600555565b6000546001600160a01b0316331461030d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146105ff57600080fd5b6000602082840312156106e657600080fd5b81356106f1816106bf565b9392505050565b60006020828403121561070a57600080fd5b5035919050565b6000806040838503121561072457600080fd5b823561072f816106bf565b946020939093013593505050565b6000806040838503121561075057600080fd5b823561075b816106bf565b9150602083013561076b816106bf565b809150509250929050565b6000806040838503121561078957600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176107c5576107c5610798565b92915050565b6000600182016107dd576107dd610798565b506001019056fea26469706673582212204db57eeeb53949f28c331802e76fd91df6bc01eafb48e945e1d29ce972176ad964736f6c63430008120033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:5003:104",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:104",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:86:104",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "123:16:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "132:1:104",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "135:1:104",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "125:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "125:12:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "125:12:104"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "82:5:104"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "93:5:104"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "108:3:104",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "113:1:104",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "104:3:104"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "104:11:104"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "117:1:104",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "100:3:104"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "100:19:104"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "89:3:104"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "89:31:104"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "79:2:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "79:42:104"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "72:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "72:50:104"
                  },
                  "nodeType": "YulIf",
                  "src": "69:70:104"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "48:5:104",
                "type": ""
              }
            ],
            "src": "14:131:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "220:177:104",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "266:16:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "275:1:104",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "278:1:104",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "268:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "268:12:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "268:12:104"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "241:7:104"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "250:9:104"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "237:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "237:23:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "262:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "233:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "233:32:104"
                  },
                  "nodeType": "YulIf",
                  "src": "230:52:104"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "291:36:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "317:9:104"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "304:12:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "304:23:104"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "295:5:104",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "361:5:104"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "336:24:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "336:31:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "336:31:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "376:15:104",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "386:5:104"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "376:6:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "186:9:104",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "197:7:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "209:6:104",
                "type": ""
              }
            ],
            "src": "150:247:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "503:102:104",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "513:26:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "525:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "536:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "521:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "521:18:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "513:4:104"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "555:9:104"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "570:6:104"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "586:3:104",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "591:1:104",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "582:3:104"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "582:11:104"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "595:1:104",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "578:3:104"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "578:19:104"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "566:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "566:32:104"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "548:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "548:51:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "548:51:104"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "472:9:104",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "483:6:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "494:4:104",
                "type": ""
              }
            ],
            "src": "402:203:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "711:76:104",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "721:26:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "733:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "744:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "729:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "729:18:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "721:4:104"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "763:9:104"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "774:6:104"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "756:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "756:25:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "756:25:104"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "680:9:104",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "691:6:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "702:4:104",
                "type": ""
              }
            ],
            "src": "610:177:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "908:102:104",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "918:26:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "930:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "941:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "926:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "926:18:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "918:4:104"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "960:9:104"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "975:6:104"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "991:3:104",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "996:1:104",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "987:3:104"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "987:11:104"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1000:1:104",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "983:3:104"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "983:19:104"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "971:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "971:32:104"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "953:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "953:51:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "953:51:104"
                }
              ]
            },
            "name": "abi_encode_tuple_t_contract$_ISClix_$6947__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "877:9:104",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "888:6:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "899:4:104",
                "type": ""
              }
            ],
            "src": "792:218:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1085:110:104",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1131:16:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1140:1:104",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1143:1:104",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1133:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1133:12:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1133:12:104"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1106:7:104"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1115:9:104"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1102:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1102:23:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1127:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1098:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1098:32:104"
                  },
                  "nodeType": "YulIf",
                  "src": "1095:52:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1156:33:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1179:9:104"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1166:12:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1166:23:104"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1156:6:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1051:9:104",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1062:7:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1074:6:104",
                "type": ""
              }
            ],
            "src": "1015:180:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1287:228:104",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1333:16:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1342:1:104",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1345:1:104",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1335:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1335:12:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1335:12:104"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1308:7:104"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1317:9:104"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1304:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1304:23:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1329:2:104",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1300:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1300:32:104"
                  },
                  "nodeType": "YulIf",
                  "src": "1297:52:104"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1358:36:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1384:9:104"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1371:12:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1371:23:104"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1362:5:104",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1428:5:104"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1403:24:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1403:31:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1403:31:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1443:15:104",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1453:5:104"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1443:6:104"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1467:42:104",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1494:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1505:2:104",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1490:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1490:18:104"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1477:12:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1477:32:104"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1467:6:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1245:9:104",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1256:7:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1268:6:104",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1276:6:104",
                "type": ""
              }
            ],
            "src": "1200:315:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1630:301:104",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1676:16:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1685:1:104",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1688:1:104",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1678:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1678:12:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1678:12:104"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1651:7:104"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1660:9:104"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1647:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1647:23:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1672:2:104",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1643:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1643:32:104"
                  },
                  "nodeType": "YulIf",
                  "src": "1640:52:104"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1701:36:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1727:9:104"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1714:12:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1714:23:104"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1705:5:104",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1771:5:104"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1746:24:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1746:31:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1746:31:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1786:15:104",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1796:5:104"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1786:6:104"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1810:47:104",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1842:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1853:2:104",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1838:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1838:18:104"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1825:12:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1825:32:104"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "1814:7:104",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "1891:7:104"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1866:24:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1866:33:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1866:33:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1908:17:104",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "1918:7:104"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1908:6:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_contract$_ISClix_$6947t_address_payable",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1588:9:104",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1599:7:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1611:6:104",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1619:6:104",
                "type": ""
              }
            ],
            "src": "1520:411:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2053:102:104",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2063:26:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2075:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2086:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2071:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2071:18:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2063:4:104"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2105:9:104"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2120:6:104"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2136:3:104",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2141:1:104",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "2132:3:104"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2132:11:104"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2145:1:104",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "2128:3:104"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2128:19:104"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2116:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2116:32:104"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2098:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2098:51:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2098:51:104"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2022:9:104",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2033:6:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2044:4:104",
                "type": ""
              }
            ],
            "src": "1936:219:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2247:161:104",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2293:16:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2302:1:104",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2305:1:104",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2295:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2295:12:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2295:12:104"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2268:7:104"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2277:9:104"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2264:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2264:23:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2289:2:104",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2260:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2260:32:104"
                  },
                  "nodeType": "YulIf",
                  "src": "2257:52:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2318:33:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2341:9:104"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2328:12:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2328:23:104"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2318:6:104"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2360:42:104",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2387:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2398:2:104",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2383:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2383:18:104"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2370:12:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2370:32:104"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2360:6:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2205:9:104",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2216:7:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2228:6:104",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2236:6:104",
                "type": ""
              }
            ],
            "src": "2160:248:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2587:161:104",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2604:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2615:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2597:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2597:21:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2597:21:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2638:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2649:2:104",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2634:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2634:18:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2654:2:104",
                        "type": "",
                        "value": "11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2627:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2627:30:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2627:30:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2677:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2688:2:104",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2673:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2673:18:104"
                      },
                      {
                        "hexValue": "73616c6520636c6f736564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2693:13:104",
                        "type": "",
                        "value": "sale closed"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2666:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2666:41:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2666:41:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2716:26:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2728:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2739:2:104",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2724:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2724:18:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2716:4:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_352bdf8a0cb0bee8116b7a59d51c8b8c759faf101e8fbc574043058ea71c1835__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2564:9:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2578:4:104",
                "type": ""
              }
            ],
            "src": "2413:335:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2785:95:104",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2802:1:104",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2809:3:104",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2814:10:104",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "2805:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2805:20:104"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2795:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2795:31:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2795:31:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2842:1:104",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2845:4:104",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2835:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2835:15:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2835:15:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2866:1:104",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2869:4:104",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "2859:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2859:15:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2859:15:104"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "2753:127:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2937:116:104",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2947:20:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "2962:1:104"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "2965:1:104"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "2958:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2958:9:104"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "2947:7:104"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3025:22:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "3027:16:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3027:18:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3027:18:104"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "2996:1:104"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "2989:6:104"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2989:9:104"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "3003:1:104"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "product",
                                    "nodeType": "YulIdentifier",
                                    "src": "3010:7:104"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "3019:1:104"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "3006:3:104"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3006:15:104"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "3000:2:104"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3000:22:104"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nodeType": "YulIdentifier",
                          "src": "2986:2:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2986:37:104"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2979:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2979:45:104"
                  },
                  "nodeType": "YulIf",
                  "src": "2976:71:104"
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "2916:1:104",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "2919:1:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "2925:7:104",
                "type": ""
              }
            ],
            "src": "2885:168:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3232:163:104",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3249:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3260:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3242:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3242:21:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3242:21:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3283:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3294:2:104",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3279:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3279:18:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3299:2:104",
                        "type": "",
                        "value": "13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3272:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3272:30:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3272:30:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3322:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3333:2:104",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3318:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3318:18:104"
                      },
                      {
                        "hexValue": "696e76616c69642076616c7565",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3338:15:104",
                        "type": "",
                        "value": "invalid value"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3311:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3311:43:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3311:43:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3363:26:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3375:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3386:2:104",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3371:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3371:18:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3363:4:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_2da5f8e96415ce1cf56ac601f863bdc4eb6ccd09c4a394ab789ec97e291c93e2__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3209:9:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3223:4:104",
                "type": ""
              }
            ],
            "src": "3058:337:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3447:88:104",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3478:22:104",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "3480:16:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3480:18:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3480:18:104"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3463:5:104"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3474:1:104",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "3470:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3470:6:104"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "3460:2:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3460:17:104"
                  },
                  "nodeType": "YulIf",
                  "src": "3457:43:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3509:20:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3520:5:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3527:1:104",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3516:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3516:13:104"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "3509:3:104"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3429:5:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "3439:3:104",
                "type": ""
              }
            ],
            "src": "3400:135:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3714:169:104",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3731:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3742:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3724:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3724:21:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3724:21:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3765:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3776:2:104",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3761:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3761:18:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3781:2:104",
                        "type": "",
                        "value": "19"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3754:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3754:30:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3754:30:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3804:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3815:2:104",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3800:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3800:18:104"
                      },
                      {
                        "hexValue": "696e76616c6964207265662061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3820:21:104",
                        "type": "",
                        "value": "invalid ref address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3793:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3793:49:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3793:49:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3851:26:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3863:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3874:2:104",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3859:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3859:18:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3851:4:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9e6a11b5f1e62b340382b92ad0b5f1f3887f4ba087e62111274d14a778c6343c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3691:9:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3705:4:104",
                "type": ""
              }
            ],
            "src": "3540:343:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4045:188:104",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4055:26:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4067:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4078:2:104",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4063:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4063:18:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4055:4:104"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4097:9:104"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "4112:6:104"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "4128:3:104",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "4133:1:104",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "4124:3:104"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4124:11:104"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4137:1:104",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "4120:3:104"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4120:19:104"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4108:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4108:32:104"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4090:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4090:51:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4090:51:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4161:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4172:2:104",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4157:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4157:18:104"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "4177:6:104"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4150:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4150:34:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4150:34:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4204:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4215:2:104",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4200:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4200:18:104"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "4220:6:104"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4193:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4193:34:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4193:34:104"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3998:9:104",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "4009:6:104",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4017:6:104",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4025:6:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4036:4:104",
                "type": ""
              }
            ],
            "src": "3888:345:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4412:228:104",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4429:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4440:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4422:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4422:21:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4422:21:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4463:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4474:2:104",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4459:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4459:18:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4479:2:104",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4452:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4452:30:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4452:30:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4502:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4513:2:104",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4498:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4498:18:104"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4518:34:104",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4491:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4491:62:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4491:62:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4573:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4584:2:104",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4569:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4569:18:104"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4589:8:104",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4562:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4562:36:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4562:36:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4607:27:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4619:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4630:3:104",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4615:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4615:19:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4607:4:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4389:9:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4403:4:104",
                "type": ""
              }
            ],
            "src": "4238:402:104"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4819:182:104",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4836:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4847:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4829:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4829:21:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4829:21:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4870:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4881:2:104",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4866:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4866:18:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4886:2:104",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4859:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4859:30:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4859:30:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4909:9:104"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4920:2:104",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4905:3:104"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4905:18:104"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4925:34:104",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4898:6:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4898:62:104"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4898:62:104"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4969:26:104",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4981:9:104"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4992:2:104",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4977:3:104"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4977:18:104"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4969:4:104"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4796:9:104",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4810:4:104",
                "type": ""
              }
            ],
            "src": "4645:356:104"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_contract$_ISClix_$6947__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_decode_tuple_t_contract$_ISClix_$6947t_address_payable(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n    }\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_tuple_t_uint256t_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := calldataload(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_stringliteral_352bdf8a0cb0bee8116b7a59d51c8b8c759faf101e8fbc574043058ea71c1835__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 11)\n        mstore(add(headStart, 64), \"sale closed\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_2da5f8e96415ce1cf56ac601f863bdc4eb6ccd09c4a394ab789ec97e291c93e2__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"invalid value\")\n        tail := add(headStart, 96)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_t_stringliteral_9e6a11b5f1e62b340382b92ad0b5f1f3887f4ba087e62111274d14a778c6343c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 19)\n        mstore(add(headStart, 64), \"invalid ref address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 104,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "3076:1161:22:-:0;;;;;;;;;;;;-1:-1:-1;936:32:0;719:10:11;936:18:0;:32::i;:::-;3076:1161:22;;2426:187:0;2499:16;2518:6;;-1:-1:-1;;;;;2534:17:0;;;-1:-1:-1;;;;;;2534:17:0;;;;;;2566:40;;2518:6;;;;;;;2566:40;;2499:16;2566:40;2489:124;2426:187;:::o;3076:1161:22:-;;;;;;;",
  "deployedSourceMap": "3076:1161:22:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3330:47;;;;;;;;;;-1:-1:-1;3330:47:22;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;3330:47:22;;;;;;-1:-1:-1;;;;;566:32:104;;;548:51;;536:2;521:18;3330:47:22;;;;;;;;3246:38;;;;;;;;;;-1:-1:-1;3246:38:22;;;;;:::i;:::-;;;;;;;;;;;;;;;;;756:25:104;;;744:2;729:18;3246:38:22;610:177:104;3120:17:22;;;;;;;;;;-1:-1:-1;3120:17:22;;;;-1:-1:-1;;;;;3120:17:22;;;1824:101:0;;;;;;;;;;;;;:::i;:::-;;2723:19:22;;;;;;;;;;-1:-1:-1;2723:19:22;;;;-1:-1:-1;;;;;2723:19:22;;;1201:85:0;;;;;;;;;;-1:-1:-1;1247:7:0;1273:6;-1:-1:-1;;;;;1273:6:0;1201:85;;3288:38:22;;;;;;;;;;-1:-1:-1;3288:38:22;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;3288:38:22;;;3199:17;;;;;;;;;;;;;;;;3222:18;;;;;;;;;;;;;;;;3178:17;;;;;;;;;;;;;;;;3724:510;;;;;;:::i;:::-;;:::i;3497:116::-;;;;;;;;;;-1:-1:-1;3497:116:22;;;;;:::i;:::-;;:::i;2074:198:0:-;;;;;;;;;;-1:-1:-1;2074:198:0;;;;;:::i;:::-;;:::i;3141:31:22:-;;;;;;;;;;-1:-1:-1;3141:31:22;;;;-1:-1:-1;;;;;3141:31:22;;;3616:103;;;;;;;;;;-1:-1:-1;3616:103:22;;;;;:::i;:::-;;:::i;1824:101:0:-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;3724:510:22:-;3806:1;3798:5;;:9;3790:33;;;;-1:-1:-1;;;3790:33:22;;2615:2:104;3790:33:22;;;2597:21:104;2654:2;2634:18;;;2627:30;-1:-1:-1;;;2673:18:104;;;2666:41;2724:18;;3790:33:22;;;;;;;;;3857:6;3849:5;;:14;;;;:::i;:::-;3836:9;:27;3828:53;;;;-1:-1:-1;;;3828:53:22;;3260:2:104;3828:53:22;;;3242:21:104;3299:2;3279:18;;;3272:30;-1:-1:-1;;;3318:18:104;;;3311:43;3371:18;;3828:53:22;3058:337:104;3828:53:22;3898:10;3891:18;;;;:6;:18;;;;;;:23;;3888:265;;3922:6;:8;;;:6;:8;;;:::i;:::-;;;;-1:-1:-1;;3965:6:22;;-1:-1:-1;;;;;3944:18:22;;;;;;:6;:18;;;;;;:27;3936:59;;;;-1:-1:-1;;;3936:59:22;;3742:2:104;3936:59:22;;;3724:21:104;3781:2;3761:18;;;3754:30;-1:-1:-1;;;3800:18:104;;;3793:49;3859:18;;3936:59:22;3540:343:104;3936:59:22;-1:-1:-1;;;;;4004:18:22;;;;;;:6;:18;;;;;;:23;4001:79;;4049:10;4036:24;;;;:12;:24;;;;;:37;;-1:-1:-1;;;;;;4036:37:22;-1:-1:-1;;;;;4036:37:22;;;;;4001:79;4108:6;;4094:10;4087:18;;;;:6;:18;;;;;;;;:27;;;4120:14;;;:6;:14;;;;;;:27;;-1:-1:-1;;;;;;4120:27:22;;;;;;3888:265;4159:8;;:28;;-1:-1:-1;;;;;4159:8:22;;;;4177:9;4159:28;;;;;:8;:28;:8;:28;4177:9;4159:8;:28;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4194:3:22;;4215:5;;;4194:35;;-1:-1:-1;;;4194:35:22;;4203:10;4194:35;;;4090:51:104;;;;4157:18;;;4150:34;4200:18;;;4193:34;;;-1:-1:-1;;;;;4194:3:22;;;;:8;;4063:18:104;;4194:35:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3724:510;;:::o;3497:116::-;1094:13:0;:11;:13::i;:::-;3573:3:22::1;:10:::0;;-1:-1:-1;;;;;3573:10:22;;::::1;-1:-1:-1::0;;;;;;3573:10:22;;::::1;;::::0;;;3588:8:::1;:20:::0;;;;;::::1;::::0;::::1;;::::0;;3497:116::o;2074:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2162:22:0;::::1;2154:73;;;::::0;-1:-1:-1;;;2154:73:0;;4440:2:104;2154:73:0::1;::::0;::::1;4422:21:104::0;4479:2;4459:18;;;4452:30;4518:34;4498:18;;;4491:62;-1:-1:-1;;;4569:18:104;;;4562:36;4615:19;;2154:73:0::1;4238:402:104::0;2154:73:0::1;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;3616:103:22:-;1094:13:0;:11;:13::i;:::-;3681:5:22::1;:14:::0;;;;3700:5:::1;:14:::0;3616:103::o;1359:130:0:-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:11;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;4847:2:104;1414:68:0;;;4829:21:104;;;4866:18;;;4859:30;4925:34;4905:18;;;4898:62;4977:18;;1414:68:0;4645:356:104;2426:187:0;2499:16;2518:6;;-1:-1:-1;;;;;2534:17:0;;;-1:-1:-1;;;;;;2534:17:0;;;;;;2566:40;;2518:6;;;;;;;2566:40;;2499:16;2566:40;2489:124;2426:187;:::o;14:131:104:-;-1:-1:-1;;;;;89:31:104;;79:42;;69:70;;135:1;132;125:12;150:247;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;:::-;386:5;150:247;-1:-1:-1;;;150:247:104:o;1015:180::-;1074:6;1127:2;1115:9;1106:7;1102:23;1098:32;1095:52;;;1143:1;1140;1133:12;1095:52;-1:-1:-1;1166:23:104;;1015:180;-1:-1:-1;1015:180:104:o;1200:315::-;1268:6;1276;1329:2;1317:9;1308:7;1304:23;1300:32;1297:52;;;1345:1;1342;1335:12;1297:52;1384:9;1371:23;1403:31;1428:5;1403:31;:::i;:::-;1453:5;1505:2;1490:18;;;;1477:32;;-1:-1:-1;;;1200:315:104:o;1520:411::-;1611:6;1619;1672:2;1660:9;1651:7;1647:23;1643:32;1640:52;;;1688:1;1685;1678:12;1640:52;1727:9;1714:23;1746:31;1771:5;1746:31;:::i;:::-;1796:5;-1:-1:-1;1853:2:104;1838:18;;1825:32;1866:33;1825:32;1866:33;:::i;:::-;1918:7;1908:17;;;1520:411;;;;;:::o;2160:248::-;2228:6;2236;2289:2;2277:9;2268:7;2264:23;2260:32;2257:52;;;2305:1;2302;2295:12;2257:52;-1:-1:-1;;2328:23:104;;;2398:2;2383:18;;;2370:32;;-1:-1:-1;2160:248:104:o;2753:127::-;2814:10;2809:3;2805:20;2802:1;2795:31;2845:4;2842:1;2835:15;2869:4;2866:1;2859:15;2885:168;2958:9;;;2989;;3006:15;;;3000:22;;2986:37;2976:71;;3027:18;;:::i;:::-;2885:168;;;;:::o;3400:135::-;3439:3;3460:17;;;3457:43;;3480:18;;:::i;:::-;-1:-1:-1;3527:1:104;3516:13;;3400:135::o",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity 0.8.18;\r\n\r\nimport \"@openzeppelin/contracts/utils/Strings.sol\";\r\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\r\nimport \"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\";\r\n\r\nimport \"./Proxy.sol\";\r\n\r\ninterface ISClix {\r\n\tfunction mint(address to, uint256 id, uint256 value) external;\r\n}\r\n\r\ncontract SClix is Ownable, ERC1155 {\r\n\r\n\tusing Strings for uint;\r\n\r\n\tstring public name;\r\n\tstring public symbol;\r\n\r\n\tmapping(address => bool) public operators;\r\n\tmapping(address => mapping(uint => uint)) public lockedNfts;\r\n\tbool public mintAvailable;\r\n\r\n\tevent Locked(address indexed userAddress, uint indexed id, uint value);\r\n\r\n\t// Clix starter pack\r\n\t// sClix\r\n\tconstructor(string memory _name, string memory _symbol, string memory _uri) ERC1155(_uri) {\r\n\r\n\t\tname = _name;\r\n\t\tsymbol = _symbol;\r\n\r\n\t\toperators[msg.sender] = true;\r\n\t}\r\n\r\n\tfunction mint(address to, uint256 id, uint256 value) public {\r\n\t\trequire(mintAvailable, \"mint closed\");\r\n\t\trequire(operators[msg.sender], \"operators only\");\r\n\t\t_mint(to, id, value, \"0x\");\r\n\t}\r\n\r\n\tfunction lock(uint256 id, uint256 value) public {\r\n\t\tuint balance = balanceOf(msg.sender, id);\r\n\t\tuint locked = lockedNfts[msg.sender][id];\r\n\r\n\t\trequire(value > 0 && value <= balance - locked, \"invalid value\");\r\n\r\n\t\tlockedNfts[msg.sender][id]+= value;\r\n\t\temit Locked(msg.sender, id, value);\r\n\t}\r\n\r\n    function setURI(string memory newuri) public onlyOwner {\r\n        _setURI(newuri);\r\n    }\r\n\r\n\tfunction setOperator(address _operator, bool _status) public onlyOwner {\r\n\t\toperators[_operator] = _status;\r\n\t}\r\n\r\n    function changeMintAvailability() public onlyOwner {\r\n\t\tmintAvailable = !mintAvailable;\r\n\t}\r\n\r\n    function uri(uint256 tokenId) public view override returns (string memory) {\r\n        string memory baseURI = super.uri(tokenId);\r\n        return bytes(baseURI).length > 0 ? string.concat(baseURI, tokenId.toString()) : \"\";\r\n    }\r\n\r\n\tfunction balanceOfBatch(address userAddress) public view returns(uint[] memory balance, uint[] memory locked) {\r\n\t\tbalance = new uint[](9);\r\n\t\tlocked = new uint[](9);\r\n\r\n\t\tfor(uint i = 1; i <= 9; i++) {\r\n\t\t\tbalance[i] = balanceOf(userAddress, i);\r\n\t\t\tlocked[i] = lockedNfts[userAddress][i];\r\n\t\t}\r\n\t\treturn (balance, locked);\r\n\t}\r\n\r\n\tfunction _beforeTokenTransfer(\r\n        address /*operator*/,\r\n        address from,\r\n        address /*to*/,\r\n        uint256[] memory ids,\r\n        uint256[] memory amounts,\r\n        bytes memory /*data*/\r\n    ) internal virtual override  {\r\n\t\tfor(uint i = 0; i < ids.length; i++) {\r\n\t\t\trequire(amounts[i] <= balanceOf(from, ids[i]) - lockedNfts[from][ids[i]], \"cannot transfer locked items\");\r\n\t\t}\r\n\t}\r\n}\r\n\r\nabstract contract ISClixSaleProxy is Ownable {\r\n\taddress public impl;\r\n}\r\n\r\ncontract SClixSaleProxy is Proxy, ISClixSaleProxy {\r\n    constructor(address _impl) {\r\n        impl = _impl;\r\n    }\r\n    \r\n    function update(address newImpl) public onlyOwner {\r\n        impl = newImpl;\r\n    }\r\n    \r\n    function _implementation() internal override view returns(address) {\r\n        return impl;\r\n    }\r\n}\r\n\r\ncontract SClixSale is ISClixSaleProxy {\r\n\r\n\tISClix public nft;\r\n\taddress payable public receiver;\r\n\r\n\tuint public nftId;\r\n\tuint public price;\r\n\r\n\tuint public lastId;\r\n\r\n\tmapping(address => uint) public userId;\r\n\tmapping(uint => address) public idUser;\r\n\tmapping(address => address) public userReferral;\r\n\r\n\t// constructor(ISClix _nft, address payable _receiver) {\r\n\t// \tnft = _nft;\r\n\t// \treceiver = _receiver;\r\n\t// }\r\n\r\n\tfunction init(ISClix _nft, address payable _receiver) public onlyOwner {\r\n\t\tnft = _nft;\r\n\t\treceiver = _receiver;\r\n\t}\r\n\tfunction setSale(uint _nftId, uint _price) public onlyOwner {\r\n\t\tnftId = _nftId;\r\n\t\tprice = _price;\r\n\t}\r\n\r\n\tfunction buy(address refAddress, uint amount) public payable {\r\n\t\trequire(nftId > 0, \"sale closed\");\r\n\t\trequire(msg.value == price * amount, \"invalid value\");\r\n\r\n\t\tif(userId[msg.sender] == 0) {\r\n\t\t\tlastId++;\r\n\t\t\trequire(userId[refAddress] < lastId, \"invalid ref address\");\r\n\t\t\tif(userId[refAddress] != 0) {\r\n\t\t\t\tuserReferral[msg.sender] = refAddress;\r\n\t\t\t}\r\n\r\n\t\t\tuserId[msg.sender] = lastId;\r\n\t\t\tidUser[lastId] = msg.sender;\r\n\t\t}\r\n\r\n\t\treceiver.transfer(msg.value);\r\n\r\n\t\tnft.mint(msg.sender, nftId, amount);\r\n\t}\r\n}",
  "sourcePath": "D:\\Docs\\palm\\qornex\\contracts\\SClix.sol",
  "ast": {
    "absolutePath": "project:/contracts/SClix.sol",
    "exportedSymbols": {
      "Address": [
        2945
      ],
      "Context": [
        2967
      ],
      "ERC1155": [
        1335
      ],
      "ERC165": [
        3220
      ],
      "IERC1155": [
        1457
      ],
      "IERC1155MetadataURI": [
        1513
      ],
      "IERC1155Receiver": [
        1498
      ],
      "IERC165": [
        3232
      ],
      "ISClix": [
        6947
      ],
      "ISClixSaleProxy": [
        7286
      ],
      "Math": [
        4098
      ],
      "Ownable": [
        112
      ],
      "Proxy": [
        4431
      ],
      "SClix": [
        7281
      ],
      "SClixSale": [
        7474
      ],
      "SClixSaleProxy": [
        7322
      ],
      "SignedMath": [
        4203
      ],
      "Strings": [
        3196
      ]
    },
    "id": 7475,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6933,
        "literals": [
          "solidity",
          "0.8",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:22"
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Strings.sol",
        "file": "@openzeppelin/contracts/utils/Strings.sol",
        "id": 6934,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 7475,
        "sourceUnit": 3197,
        "src": "60:51:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 6935,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 7475,
        "sourceUnit": 113,
        "src": "113:52:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
        "id": 6936,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 7475,
        "sourceUnit": 1336,
        "src": "167:59:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/Proxy.sol",
        "file": "./Proxy.sol",
        "id": 6937,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 7475,
        "sourceUnit": 4432,
        "src": "230:21:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "ISClix",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 6947,
        "linearizedBaseContracts": [
          6947
        ],
        "name": "ISClix",
        "nameLocation": "265:6:22",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "156e29f6",
            "id": 6946,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "285:4:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6939,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "298:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 6946,
                  "src": "290:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6938,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "290:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6941,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "310:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 6946,
                  "src": "302:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6940,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6943,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "322:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 6946,
                  "src": "314:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6942,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "289:39:22"
            },
            "returnParameters": {
              "id": 6945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:22"
            },
            "scope": 6947,
            "src": "276:62:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 7475,
        "src": "255:86:22",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 6948,
              "name": "Ownable",
              "nameLocations": [
                "363:7:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "363:7:22"
            },
            "id": 6949,
            "nodeType": "InheritanceSpecifier",
            "src": "363:7:22"
          },
          {
            "baseName": {
              "id": 6950,
              "name": "ERC1155",
              "nameLocations": [
                "372:7:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1335,
              "src": "372:7:22"
            },
            "id": 6951,
            "nodeType": "InheritanceSpecifier",
            "src": "372:7:22"
          }
        ],
        "canonicalName": "SClix",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 7281,
        "linearizedBaseContracts": [
          7281,
          1335,
          1513,
          1457,
          3220,
          3232,
          112,
          2967
        ],
        "name": "SClix",
        "nameLocation": "354:5:22",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "global": false,
            "id": 6954,
            "libraryName": {
              "id": 6952,
              "name": "Strings",
              "nameLocations": [
                "392:7:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3196,
              "src": "392:7:22"
            },
            "nodeType": "UsingForDirective",
            "src": "386:23:22",
            "typeName": {
              "id": 6953,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "404:4:22",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "functionSelector": "06fdde03",
            "id": 6956,
            "mutability": "mutable",
            "name": "name",
            "nameLocation": "428:4:22",
            "nodeType": "VariableDeclaration",
            "scope": 7281,
            "src": "414:18:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 6955,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "414:6:22",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "95d89b41",
            "id": 6958,
            "mutability": "mutable",
            "name": "symbol",
            "nameLocation": "450:6:22",
            "nodeType": "VariableDeclaration",
            "scope": 7281,
            "src": "436:20:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 6957,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "436:6:22",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "13e7c9d8",
            "id": 6962,
            "mutability": "mutable",
            "name": "operators",
            "nameLocation": "494:9:22",
            "nodeType": "VariableDeclaration",
            "scope": 7281,
            "src": "462:41:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 6961,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 6959,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "470:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "462:24:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 6960,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "481:4:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "ab00819e",
            "id": 6968,
            "mutability": "mutable",
            "name": "lockedNfts",
            "nameLocation": "556:10:22",
            "nodeType": "VariableDeclaration",
            "scope": 7281,
            "src": "507:59:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(uint256 => uint256))"
            },
            "typeName": {
              "id": 6967,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 6963,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "515:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "507:41:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(uint256 => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 6966,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 6964,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "534:4:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "526:21:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 6965,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "542:4:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "99f19cea",
            "id": 6970,
            "mutability": "mutable",
            "name": "mintAvailable",
            "nameLocation": "582:13:22",
            "nodeType": "VariableDeclaration",
            "scope": 7281,
            "src": "570:25:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 6969,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "570:4:22",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "eventSelector": "d4665e3049283582ba6f9eba07a5b3e12dab49e02da99e8927a47af5d134bea5",
            "id": 6978,
            "name": "Locked",
            "nameLocation": "607:6:22",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6972,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "userAddress",
                  "nameLocation": "630:11:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 6978,
                  "src": "614:27:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6971,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "614:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6974,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "656:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 6978,
                  "src": "643:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6973,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "643:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6976,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "665:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 6978,
                  "src": "660:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6975,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "660:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "613:58:22"
            },
            "src": "601:71:22"
          },
          {
            "body": {
              "id": 7005,
              "nodeType": "Block",
              "src": "801:80:22",
              "statements": [
                {
                  "expression": {
                    "id": 6992,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6990,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6956,
                      "src": "808:4:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6991,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6980,
                      "src": "815:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "808:12:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 6993,
                  "nodeType": "ExpressionStatement",
                  "src": "808:12:22"
                },
                {
                  "expression": {
                    "id": 6996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6994,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6958,
                      "src": "825:6:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6995,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6982,
                      "src": "834:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "825:16:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 6997,
                  "nodeType": "ExpressionStatement",
                  "src": "825:16:22"
                },
                {
                  "expression": {
                    "id": 7003,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 6998,
                        "name": "operators",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6962,
                        "src": "848:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 7001,
                      "indexExpression": {
                        "expression": {
                          "id": 6999,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "858:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7000,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "862:6:22",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "858:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "848:21:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 7002,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "872:4:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "848:28:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7004,
                  "nodeType": "ExpressionStatement",
                  "src": "848:28:22"
                }
              ]
            },
            "id": 7006,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 6987,
                    "name": "_uri",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6984,
                    "src": "795:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 6988,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 6986,
                  "name": "ERC1155",
                  "nameLocations": [
                    "787:7:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1335,
                  "src": "787:7:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "787:13:22"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6980,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "737:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7006,
                  "src": "723:19:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6979,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "723:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6982,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "758:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7006,
                  "src": "744:21:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6981,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6984,
                  "mutability": "mutable",
                  "name": "_uri",
                  "nameLocation": "781:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7006,
                  "src": "767:18:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6983,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "767:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "722:64:22"
            },
            "returnParameters": {
              "id": 6989,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "801:0:22"
            },
            "scope": 7281,
            "src": "711:170:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7035,
              "nodeType": "Block",
              "src": "946:131:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 7016,
                        "name": "mintAvailable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6970,
                        "src": "959:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6d696e7420636c6f736564",
                        "id": 7017,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "974:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_05d4a749835bfc3197747059b4a5dcc9e56b04691fa2fb6c70a28c902793ed84",
                          "typeString": "literal_string \"mint closed\""
                        },
                        "value": "mint closed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_05d4a749835bfc3197747059b4a5dcc9e56b04691fa2fb6c70a28c902793ed84",
                          "typeString": "literal_string \"mint closed\""
                        }
                      ],
                      "id": 7015,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "951:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7018,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "951:37:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7019,
                  "nodeType": "ExpressionStatement",
                  "src": "951:37:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 7021,
                          "name": "operators",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6962,
                          "src": "1001:9:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 7024,
                        "indexExpression": {
                          "expression": {
                            "id": 7022,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1011:3:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 7023,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1015:6:22",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1011:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1001:21:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f70657261746f7273206f6e6c79",
                        "id": 7025,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1024:16:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6ecd1e01e6248d837472be69086b18ad54129d0d1a16911855e8e291d136884f",
                          "typeString": "literal_string \"operators only\""
                        },
                        "value": "operators only"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6ecd1e01e6248d837472be69086b18ad54129d0d1a16911855e8e291d136884f",
                          "typeString": "literal_string \"operators only\""
                        }
                      ],
                      "id": 7020,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "993:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "993:48:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7027,
                  "nodeType": "ExpressionStatement",
                  "src": "993:48:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 7029,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7008,
                        "src": "1052:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 7030,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7010,
                        "src": "1056:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 7031,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7012,
                        "src": "1060:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "3078",
                        "id": 7032,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1067:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_39bef1777deb3dfb14f64b9f81ced092c501fee72f90e93d03bb95ee89df9837",
                          "typeString": "literal_string \"0x\""
                        },
                        "value": "0x"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_39bef1777deb3dfb14f64b9f81ced092c501fee72f90e93d03bb95ee89df9837",
                          "typeString": "literal_string \"0x\""
                        }
                      ],
                      "id": 7028,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 769,
                      "src": "1046:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,uint256,bytes memory)"
                      }
                    },
                    "id": 7033,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1046:26:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7034,
                  "nodeType": "ExpressionStatement",
                  "src": "1046:26:22"
                }
              ]
            },
            "functionSelector": "156e29f6",
            "id": 7036,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "895:4:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7008,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "908:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7036,
                  "src": "900:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7007,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "900:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7010,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "920:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7036,
                  "src": "912:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "912:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7012,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "932:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7036,
                  "src": "924:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7011,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "924:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "899:39:22"
            },
            "returnParameters": {
              "id": 7014,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "946:0:22"
            },
            "scope": 7281,
            "src": "886:191:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7089,
              "nodeType": "Block",
              "src": "1130:246:22",
              "statements": [
                {
                  "assignments": [
                    7044
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7044,
                      "mutability": "mutable",
                      "name": "balance",
                      "nameLocation": "1140:7:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 7089,
                      "src": "1135:12:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7043,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1135:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7050,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 7046,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1160:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7047,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1164:6:22",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1160:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 7048,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7038,
                        "src": "1172:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7045,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 228,
                      "src": "1150:9:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) view returns (uint256)"
                      }
                    },
                    "id": 7049,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1150:25:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1135:40:22"
                },
                {
                  "assignments": [
                    7052
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7052,
                      "mutability": "mutable",
                      "name": "locked",
                      "nameLocation": "1185:6:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 7089,
                      "src": "1180:11:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7051,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1180:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7059,
                  "initialValue": {
                    "baseExpression": {
                      "baseExpression": {
                        "id": 7053,
                        "name": "lockedNfts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6968,
                        "src": "1194:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(uint256 => uint256))"
                        }
                      },
                      "id": 7056,
                      "indexExpression": {
                        "expression": {
                          "id": 7054,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1205:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7055,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1209:6:22",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1205:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1194:22:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 7058,
                    "indexExpression": {
                      "id": 7057,
                      "name": "id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7038,
                      "src": "1217:2:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1194:26:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1180:40:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 7069,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 7063,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 7061,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7040,
                            "src": "1235:5:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 7062,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1243:1:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1235:9:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 7068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 7064,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7040,
                            "src": "1248:5:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 7067,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 7065,
                              "name": "balance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7044,
                              "src": "1257:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 7066,
                              "name": "locked",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7052,
                              "src": "1267:6:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1257:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1248:25:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1235:38:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "696e76616c69642076616c7565",
                        "id": 7070,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1275:15:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2da5f8e96415ce1cf56ac601f863bdc4eb6ccd09c4a394ab789ec97e291c93e2",
                          "typeString": "literal_string \"invalid value\""
                        },
                        "value": "invalid value"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2da5f8e96415ce1cf56ac601f863bdc4eb6ccd09c4a394ab789ec97e291c93e2",
                          "typeString": "literal_string \"invalid value\""
                        }
                      ],
                      "id": 7060,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1227:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7071,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1227:64:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7072,
                  "nodeType": "ExpressionStatement",
                  "src": "1227:64:22"
                },
                {
                  "expression": {
                    "id": 7080,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 7073,
                          "name": "lockedNfts",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6968,
                          "src": "1298:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(uint256 => uint256))"
                          }
                        },
                        "id": 7077,
                        "indexExpression": {
                          "expression": {
                            "id": 7074,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1309:3:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 7075,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1313:6:22",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1309:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1298:22:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 7078,
                      "indexExpression": {
                        "id": 7076,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7038,
                        "src": "1321:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1298:26:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 7079,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7040,
                      "src": "1327:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1298:34:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7081,
                  "nodeType": "ExpressionStatement",
                  "src": "1298:34:22"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 7083,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1349:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7084,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1353:6:22",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1349:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 7085,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7038,
                        "src": "1361:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 7086,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7040,
                        "src": "1365:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7082,
                      "name": "Locked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6978,
                      "src": "1342:6:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 7087,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1342:29:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7088,
                  "nodeType": "EmitStatement",
                  "src": "1337:34:22"
                }
              ]
            },
            "functionSelector": "1338736f",
            "id": 7090,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "lock",
            "nameLocation": "1091:4:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7038,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1104:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7090,
                  "src": "1096:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7037,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1096:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7040,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1116:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7090,
                  "src": "1108:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7039,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1108:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1095:27:22"
            },
            "returnParameters": {
              "id": 7042,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1130:0:22"
            },
            "scope": 7281,
            "src": "1082:294:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7101,
              "nodeType": "Block",
              "src": "1439:34:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 7098,
                        "name": "newuri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7092,
                        "src": "1458:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 7097,
                      "name": "_setURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 668,
                      "src": "1450:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 7099,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1450:15:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7100,
                  "nodeType": "ExpressionStatement",
                  "src": "1450:15:22"
                }
              ]
            },
            "functionSelector": "02fe5305",
            "id": 7102,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7095,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7094,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1429:9:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "1429:9:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "1429:9:22"
              }
            ],
            "name": "setURI",
            "nameLocation": "1393:6:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7092,
                  "mutability": "mutable",
                  "name": "newuri",
                  "nameLocation": "1414:6:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7102,
                  "src": "1400:20:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7091,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1400:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1399:22:22"
            },
            "returnParameters": {
              "id": 7096,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1439:0:22"
            },
            "scope": 7281,
            "src": "1384:89:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7117,
              "nodeType": "Block",
              "src": "1549:40:22",
              "statements": [
                {
                  "expression": {
                    "id": 7115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 7111,
                        "name": "operators",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6962,
                        "src": "1554:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 7113,
                      "indexExpression": {
                        "id": 7112,
                        "name": "_operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7104,
                        "src": "1564:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1554:20:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7114,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7106,
                      "src": "1577:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1554:30:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7116,
                  "nodeType": "ExpressionStatement",
                  "src": "1554:30:22"
                }
              ]
            },
            "functionSelector": "558a7297",
            "id": 7118,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7109,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7108,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1539:9:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "1539:9:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "1539:9:22"
              }
            ],
            "name": "setOperator",
            "nameLocation": "1487:11:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7104,
                  "mutability": "mutable",
                  "name": "_operator",
                  "nameLocation": "1507:9:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7118,
                  "src": "1499:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7103,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1499:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7106,
                  "mutability": "mutable",
                  "name": "_status",
                  "nameLocation": "1523:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7118,
                  "src": "1518:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7105,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1518:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1498:33:22"
            },
            "returnParameters": {
              "id": 7110,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1549:0:22"
            },
            "scope": 7281,
            "src": "1478:111:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7128,
              "nodeType": "Block",
              "src": "1648:40:22",
              "statements": [
                {
                  "expression": {
                    "id": 7126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7123,
                      "name": "mintAvailable",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6970,
                      "src": "1653:13:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "1669:14:22",
                      "subExpression": {
                        "id": 7124,
                        "name": "mintAvailable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6970,
                        "src": "1670:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1653:30:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7127,
                  "nodeType": "ExpressionStatement",
                  "src": "1653:30:22"
                }
              ]
            },
            "functionSelector": "c8ca64af",
            "id": 7129,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7121,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7120,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1638:9:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "1638:9:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "1638:9:22"
              }
            ],
            "name": "changeMintAvailability",
            "nameLocation": "1606:22:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7119,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1628:2:22"
            },
            "returnParameters": {
              "id": 7122,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1648:0:22"
            },
            "scope": 7281,
            "src": "1597:91:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              200
            ],
            "body": {
              "id": 7162,
              "nodeType": "Block",
              "src": "1771:154:22",
              "statements": [
                {
                  "assignments": [
                    7138
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7138,
                      "mutability": "mutable",
                      "name": "baseURI",
                      "nameLocation": "1796:7:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 7162,
                      "src": "1782:21:22",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7137,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1782:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7143,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 7141,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7131,
                        "src": "1816:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 7139,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "1806:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_SClix_$7281_$",
                          "typeString": "type(contract super SClix)"
                        }
                      },
                      "id": 7140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1812:3:22",
                      "memberName": "uri",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 200,
                      "src": "1806:9:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) view returns (string memory)"
                      }
                    },
                    "id": 7142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1806:18:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1782:42:22"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 7150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 7146,
                              "name": "baseURI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7138,
                              "src": "1848:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 7145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1842:5:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 7144,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "1842:5:22",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 7147,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1842:14:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 7148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1857:6:22",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "1842:21:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 7149,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1866:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1842:25:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "hexValue": "",
                      "id": 7159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1915:2:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                        "typeString": "literal_string \"\""
                      },
                      "value": ""
                    },
                    "id": 7160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "1842:75:22",
                    "trueExpression": {
                      "arguments": [
                        {
                          "id": 7154,
                          "name": "baseURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7138,
                          "src": "1884:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 7155,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7131,
                              "src": "1893:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 7156,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1901:8:22",
                            "memberName": "toString",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3026,
                            "src": "1893:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256) pure returns (string memory)"
                            }
                          },
                          "id": 7157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1893:18:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "expression": {
                          "id": 7152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1870:6:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 7151,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1870:6:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 7153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1877:6:22",
                        "memberName": "concat",
                        "nodeType": "MemberAccess",
                        "src": "1870:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_stringconcat_pure$__$returns$_t_string_memory_ptr_$",
                          "typeString": "function () pure returns (string memory)"
                        }
                      },
                      "id": 7158,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1870:42:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7136,
                  "id": 7161,
                  "nodeType": "Return",
                  "src": "1835:82:22"
                }
              ]
            },
            "functionSelector": "0e89341c",
            "id": 7163,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "uri",
            "nameLocation": "1705:3:22",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 7133,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1738:8:22"
            },
            "parameters": {
              "id": 7132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7131,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1717:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7163,
                  "src": "1709:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1709:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1708:17:22"
            },
            "returnParameters": {
              "id": 7136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7135,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7163,
                  "src": "1756:13:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7134,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1756:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1755:15:22"
            },
            "scope": 7281,
            "src": "1696:229:22",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7225,
              "nodeType": "Block",
              "src": "2040:218:22",
              "statements": [
                {
                  "expression": {
                    "id": 7180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7174,
                      "name": "balance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7169,
                      "src": "2045:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "39",
                          "id": 7178,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2066:1:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_9_by_1",
                            "typeString": "int_const 9"
                          },
                          "value": "9"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_9_by_1",
                            "typeString": "int_const 9"
                          }
                        ],
                        "id": 7177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "2055:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (uint256[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 7175,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "2059:4:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 7176,
                          "nodeType": "ArrayTypeName",
                          "src": "2059:6:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        }
                      },
                      "id": 7179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2055:13:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "src": "2045:23:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "id": 7181,
                  "nodeType": "ExpressionStatement",
                  "src": "2045:23:22"
                },
                {
                  "expression": {
                    "id": 7188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7182,
                      "name": "locked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7172,
                      "src": "2073:6:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "39",
                          "id": 7186,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2093:1:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_9_by_1",
                            "typeString": "int_const 9"
                          },
                          "value": "9"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_9_by_1",
                            "typeString": "int_const 9"
                          }
                        ],
                        "id": 7185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "2082:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (uint256[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 7183,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "2086:4:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 7184,
                          "nodeType": "ArrayTypeName",
                          "src": "2086:6:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        }
                      },
                      "id": 7187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2082:13:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "src": "2073:22:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "id": 7189,
                  "nodeType": "ExpressionStatement",
                  "src": "2073:22:22"
                },
                {
                  "body": {
                    "id": 7219,
                    "nodeType": "Block",
                    "src": "2131:94:22",
                    "statements": [
                      {
                        "expression": {
                          "id": 7207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 7200,
                              "name": "balance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7169,
                              "src": "2137:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 7202,
                            "indexExpression": {
                              "id": 7201,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7191,
                              "src": "2145:1:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2137:10:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 7204,
                                "name": "userAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7165,
                                "src": "2160:11:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 7205,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7191,
                                "src": "2173:1:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 7203,
                              "name": "balanceOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 228,
                              "src": "2150:9:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (address,uint256) view returns (uint256)"
                              }
                            },
                            "id": 7206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2150:25:22",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2137:38:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7208,
                        "nodeType": "ExpressionStatement",
                        "src": "2137:38:22"
                      },
                      {
                        "expression": {
                          "id": 7217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 7209,
                              "name": "locked",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7172,
                              "src": "2181:6:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 7211,
                            "indexExpression": {
                              "id": 7210,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7191,
                              "src": "2188:1:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2181:9:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "baseExpression": {
                              "baseExpression": {
                                "id": 7212,
                                "name": "lockedNfts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6968,
                                "src": "2193:10:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(uint256 => uint256))"
                                }
                              },
                              "id": 7214,
                              "indexExpression": {
                                "id": 7213,
                                "name": "userAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7165,
                                "src": "2204:11:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2193:23:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 7216,
                            "indexExpression": {
                              "id": 7215,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7191,
                              "src": "2217:1:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2193:26:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2181:38:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7218,
                        "nodeType": "ExpressionStatement",
                        "src": "2181:38:22"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 7194,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7191,
                      "src": "2118:1:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "hexValue": "39",
                      "id": 7195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2123:1:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_9_by_1",
                        "typeString": "int_const 9"
                      },
                      "value": "9"
                    },
                    "src": "2118:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7220,
                  "initializationExpression": {
                    "assignments": [
                      7191
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 7191,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2111:1:22",
                        "nodeType": "VariableDeclaration",
                        "scope": 7220,
                        "src": "2106:6:22",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 7190,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2106:4:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 7193,
                    "initialValue": {
                      "hexValue": "31",
                      "id": 7192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2115:1:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2106:10:22"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 7198,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2126:3:22",
                      "subExpression": {
                        "id": 7197,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7191,
                        "src": "2126:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7199,
                    "nodeType": "ExpressionStatement",
                    "src": "2126:3:22"
                  },
                  "nodeType": "ForStatement",
                  "src": "2102:123:22"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 7221,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7169,
                        "src": "2237:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 7222,
                        "name": "locked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7172,
                        "src": "2246:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      }
                    ],
                    "id": 7223,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2236:17:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(uint256[] memory,uint256[] memory)"
                    }
                  },
                  "functionReturnParameters": 7173,
                  "id": 7224,
                  "nodeType": "Return",
                  "src": "2229:24:22"
                }
              ]
            },
            "functionSelector": "fc8f7b4e",
            "id": 7226,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOfBatch",
            "nameLocation": "1939:14:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7165,
                  "mutability": "mutable",
                  "name": "userAddress",
                  "nameLocation": "1962:11:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7226,
                  "src": "1954:19:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7164,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1954:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1953:21:22"
            },
            "returnParameters": {
              "id": 7173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7169,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "2009:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7226,
                  "src": "1995:21:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7167,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1995:4:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7168,
                    "nodeType": "ArrayTypeName",
                    "src": "1995:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7172,
                  "mutability": "mutable",
                  "name": "locked",
                  "nameLocation": "2032:6:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7226,
                  "src": "2018:20:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7170,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2018:4:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7171,
                    "nodeType": "ArrayTypeName",
                    "src": "2018:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1994:45:22"
            },
            "scope": 7281,
            "src": "1930:328:22",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1159
            ],
            "body": {
              "id": 7279,
              "nodeType": "Block",
              "src": "2504:163:22",
              "statements": [
                {
                  "body": {
                    "id": 7277,
                    "nodeType": "Block",
                    "src": "2546:117:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 7273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "baseExpression": {
                                  "id": 7256,
                                  "name": "amounts",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7238,
                                  "src": "2560:7:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                    "typeString": "uint256[] memory"
                                  }
                                },
                                "id": 7258,
                                "indexExpression": {
                                  "id": 7257,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7245,
                                  "src": "2568:1:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2560:10:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "<=",
                              "rightExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 7272,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "arguments": [
                                    {
                                      "id": 7260,
                                      "name": "from",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7230,
                                      "src": "2584:4:22",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "baseExpression": {
                                        "id": 7261,
                                        "name": "ids",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7235,
                                        "src": "2590:3:22",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                          "typeString": "uint256[] memory"
                                        }
                                      },
                                      "id": 7263,
                                      "indexExpression": {
                                        "id": 7262,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7245,
                                        "src": "2594:1:22",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "2590:6:22",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 7259,
                                    "name": "balanceOf",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 228,
                                    "src": "2574:9:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                                      "typeString": "function (address,uint256) view returns (uint256)"
                                    }
                                  },
                                  "id": 7264,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2574:23:22",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "baseExpression": {
                                    "baseExpression": {
                                      "id": 7265,
                                      "name": "lockedNfts",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6968,
                                      "src": "2600:10:22",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                        "typeString": "mapping(address => mapping(uint256 => uint256))"
                                      }
                                    },
                                    "id": 7267,
                                    "indexExpression": {
                                      "id": 7266,
                                      "name": "from",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7230,
                                      "src": "2611:4:22",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2600:16:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                      "typeString": "mapping(uint256 => uint256)"
                                    }
                                  },
                                  "id": 7271,
                                  "indexExpression": {
                                    "baseExpression": {
                                      "id": 7268,
                                      "name": "ids",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7235,
                                      "src": "2617:3:22",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[] memory"
                                      }
                                    },
                                    "id": 7270,
                                    "indexExpression": {
                                      "id": 7269,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7245,
                                      "src": "2621:1:22",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2617:6:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2600:24:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2574:50:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2560:64:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "63616e6e6f74207472616e73666572206c6f636b6564206974656d73",
                              "id": 7274,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2626:30:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_1e38dabd7d248ae1322ba69c884a4c600fe4a458cd1527f2b8b963e8cfb71e19",
                                "typeString": "literal_string \"cannot transfer locked items\""
                              },
                              "value": "cannot transfer locked items"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_1e38dabd7d248ae1322ba69c884a4c600fe4a458cd1527f2b8b963e8cfb71e19",
                                "typeString": "literal_string \"cannot transfer locked items\""
                              }
                            ],
                            "id": 7255,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967278,
                              4294967278
                            ],
                            "referencedDeclaration": 4294967278,
                            "src": "2552:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 7275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2552:105:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7276,
                        "nodeType": "ExpressionStatement",
                        "src": "2552:105:22"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 7248,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7245,
                      "src": "2525:1:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 7249,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7235,
                        "src": "2529:3:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 7250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2533:6:22",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2529:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2525:14:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7278,
                  "initializationExpression": {
                    "assignments": [
                      7245
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 7245,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2518:1:22",
                        "nodeType": "VariableDeclaration",
                        "scope": 7278,
                        "src": "2513:6:22",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 7244,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2513:4:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 7247,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 7246,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2522:1:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2513:10:22"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 7253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2541:3:22",
                      "subExpression": {
                        "id": 7252,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7245,
                        "src": "2541:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7254,
                    "nodeType": "ExpressionStatement",
                    "src": "2541:3:22"
                  },
                  "nodeType": "ForStatement",
                  "src": "2509:154:22"
                }
              ]
            },
            "id": 7280,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_beforeTokenTransfer",
            "nameLocation": "2272:20:22",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 7242,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2494:8:22"
            },
            "parameters": {
              "id": 7241,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7228,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7280,
                  "src": "2303:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7227,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2303:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7230,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2342:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7280,
                  "src": "2334:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7229,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2334:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7232,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7280,
                  "src": "2357:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7231,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2357:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7235,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "2399:3:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7280,
                  "src": "2382:20:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7233,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2382:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7234,
                    "nodeType": "ArrayTypeName",
                    "src": "2382:9:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7238,
                  "mutability": "mutable",
                  "name": "amounts",
                  "nameLocation": "2430:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7280,
                  "src": "2413:24:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7236,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2413:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7237,
                    "nodeType": "ArrayTypeName",
                    "src": "2413:9:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7240,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7280,
                  "src": "2448:12:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 7239,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2448:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2292:184:22"
            },
            "returnParameters": {
              "id": 7243,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2504:0:22"
            },
            "scope": 7281,
            "src": "2263:404:22",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "scope": 7475,
        "src": "345:2325:22",
        "usedErrors": []
      },
      {
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 7282,
              "name": "Ownable",
              "nameLocations": [
                "2711:7:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "2711:7:22"
            },
            "id": 7283,
            "nodeType": "InheritanceSpecifier",
            "src": "2711:7:22"
          }
        ],
        "canonicalName": "ISClixSaleProxy",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 7286,
        "linearizedBaseContracts": [
          7286,
          112,
          2967
        ],
        "name": "ISClixSaleProxy",
        "nameLocation": "2692:15:22",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "8abf6077",
            "id": 7285,
            "mutability": "mutable",
            "name": "impl",
            "nameLocation": "2738:4:22",
            "nodeType": "VariableDeclaration",
            "scope": 7286,
            "src": "2723:19:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 7284,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2723:7:22",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          }
        ],
        "scope": 7475,
        "src": "2674:72:22",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 7287,
              "name": "Proxy",
              "nameLocations": [
                "2777:5:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4431,
              "src": "2777:5:22"
            },
            "id": 7288,
            "nodeType": "InheritanceSpecifier",
            "src": "2777:5:22"
          },
          {
            "baseName": {
              "id": 7289,
              "name": "ISClixSaleProxy",
              "nameLocations": [
                "2784:15:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7286,
              "src": "2784:15:22"
            },
            "id": 7290,
            "nodeType": "InheritanceSpecifier",
            "src": "2784:15:22"
          }
        ],
        "canonicalName": "SClixSaleProxy",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 7322,
        "linearizedBaseContracts": [
          7322,
          7286,
          112,
          2967,
          4431
        ],
        "name": "SClixSaleProxy",
        "nameLocation": "2759:14:22",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7299,
              "nodeType": "Block",
              "src": "2834:31:22",
              "statements": [
                {
                  "expression": {
                    "id": 7297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7295,
                      "name": "impl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7285,
                      "src": "2845:4:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7296,
                      "name": "_impl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7292,
                      "src": "2852:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2845:12:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 7298,
                  "nodeType": "ExpressionStatement",
                  "src": "2845:12:22"
                }
              ]
            },
            "id": 7300,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7292,
                  "mutability": "mutable",
                  "name": "_impl",
                  "nameLocation": "2827:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7300,
                  "src": "2819:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7291,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2819:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2818:15:22"
            },
            "returnParameters": {
              "id": 7294,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2834:0:22"
            },
            "scope": 7322,
            "src": "2807:58:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7311,
              "nodeType": "Block",
              "src": "2927:33:22",
              "statements": [
                {
                  "expression": {
                    "id": 7309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7307,
                      "name": "impl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7285,
                      "src": "2938:4:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7308,
                      "name": "newImpl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7302,
                      "src": "2945:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2938:14:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 7310,
                  "nodeType": "ExpressionStatement",
                  "src": "2938:14:22"
                }
              ]
            },
            "functionSelector": "1c1b8772",
            "id": 7312,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7305,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7304,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2917:9:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "2917:9:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "2917:9:22"
              }
            ],
            "name": "update",
            "nameLocation": "2886:6:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7302,
                  "mutability": "mutable",
                  "name": "newImpl",
                  "nameLocation": "2901:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7312,
                  "src": "2893:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7301,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2893:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2892:17:22"
            },
            "returnParameters": {
              "id": 7306,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2927:0:22"
            },
            "scope": 7322,
            "src": "2877:83:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              4396
            ],
            "body": {
              "id": 7320,
              "nodeType": "Block",
              "src": "3039:30:22",
              "statements": [
                {
                  "expression": {
                    "id": 7318,
                    "name": "impl",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7285,
                    "src": "3057:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 7317,
                  "id": 7319,
                  "nodeType": "Return",
                  "src": "3050:11:22"
                }
              ]
            },
            "id": 7321,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_implementation",
            "nameLocation": "2981:15:22",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 7314,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3008:8:22"
            },
            "parameters": {
              "id": 7313,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2996:2:22"
            },
            "returnParameters": {
              "id": 7317,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7316,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7321,
                  "src": "3030:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7315,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3030:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3029:9:22"
            },
            "scope": 7322,
            "src": "2972:97:22",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 7475,
        "src": "2750:322:22",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 7323,
              "name": "ISClixSaleProxy",
              "nameLocations": [
                "3098:15:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7286,
              "src": "3098:15:22"
            },
            "id": 7324,
            "nodeType": "InheritanceSpecifier",
            "src": "3098:15:22"
          }
        ],
        "canonicalName": "SClixSale",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 7474,
        "linearizedBaseContracts": [
          7474,
          7286,
          112,
          2967
        ],
        "name": "SClixSale",
        "nameLocation": "3085:9:22",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "47ccca02",
            "id": 7327,
            "mutability": "mutable",
            "name": "nft",
            "nameLocation": "3134:3:22",
            "nodeType": "VariableDeclaration",
            "scope": 7474,
            "src": "3120:17:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ISClix_$6947",
              "typeString": "contract ISClix"
            },
            "typeName": {
              "id": 7326,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 7325,
                "name": "ISClix",
                "nameLocations": [
                  "3120:6:22"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6947,
                "src": "3120:6:22"
              },
              "referencedDeclaration": 6947,
              "src": "3120:6:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ISClix_$6947",
                "typeString": "contract ISClix"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "f7260d3e",
            "id": 7329,
            "mutability": "mutable",
            "name": "receiver",
            "nameLocation": "3164:8:22",
            "nodeType": "VariableDeclaration",
            "scope": 7474,
            "src": "3141:31:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 7328,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3141:15:22",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "c6bc5182",
            "id": 7331,
            "mutability": "mutable",
            "name": "nftId",
            "nameLocation": "3190:5:22",
            "nodeType": "VariableDeclaration",
            "scope": 7474,
            "src": "3178:17:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7330,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "3178:4:22",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "a035b1fe",
            "id": 7333,
            "mutability": "mutable",
            "name": "price",
            "nameLocation": "3211:5:22",
            "nodeType": "VariableDeclaration",
            "scope": 7474,
            "src": "3199:17:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7332,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "3199:4:22",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "c1292cc3",
            "id": 7335,
            "mutability": "mutable",
            "name": "lastId",
            "nameLocation": "3234:6:22",
            "nodeType": "VariableDeclaration",
            "scope": 7474,
            "src": "3222:18:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7334,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "3222:4:22",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "376fe102",
            "id": 7339,
            "mutability": "mutable",
            "name": "userId",
            "nameLocation": "3278:6:22",
            "nodeType": "VariableDeclaration",
            "scope": 7474,
            "src": "3246:38:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 7338,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 7336,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3254:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "3246:24:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 7337,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "3265:4:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "98a3adce",
            "id": 7343,
            "mutability": "mutable",
            "name": "idUser",
            "nameLocation": "3320:6:22",
            "nodeType": "VariableDeclaration",
            "scope": 7474,
            "src": "3288:38:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 7342,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 7340,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "3296:4:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "3288:24:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 7341,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3304:7:22",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "34c8c3ae",
            "id": 7347,
            "mutability": "mutable",
            "name": "userReferral",
            "nameLocation": "3365:12:22",
            "nodeType": "VariableDeclaration",
            "scope": 7474,
            "src": "3330:47:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
              "typeString": "mapping(address => address)"
            },
            "typeName": {
              "id": 7346,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 7344,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3338:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "3330:27:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                "typeString": "mapping(address => address)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 7345,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3349:7:22",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 7365,
              "nodeType": "Block",
              "src": "3568:45:22",
              "statements": [
                {
                  "expression": {
                    "id": 7359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7357,
                      "name": "nft",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7327,
                      "src": "3573:3:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISClix_$6947",
                        "typeString": "contract ISClix"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7358,
                      "name": "_nft",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7350,
                      "src": "3579:4:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISClix_$6947",
                        "typeString": "contract ISClix"
                      }
                    },
                    "src": "3573:10:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISClix_$6947",
                      "typeString": "contract ISClix"
                    }
                  },
                  "id": 7360,
                  "nodeType": "ExpressionStatement",
                  "src": "3573:10:22"
                },
                {
                  "expression": {
                    "id": 7363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7361,
                      "name": "receiver",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7329,
                      "src": "3588:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7362,
                      "name": "_receiver",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7352,
                      "src": "3599:9:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "3588:20:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 7364,
                  "nodeType": "ExpressionStatement",
                  "src": "3588:20:22"
                }
              ]
            },
            "functionSelector": "f09a4016",
            "id": 7366,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7355,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7354,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "3558:9:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "3558:9:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "3558:9:22"
              }
            ],
            "name": "init",
            "nameLocation": "3506:4:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7353,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7350,
                  "mutability": "mutable",
                  "name": "_nft",
                  "nameLocation": "3518:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7366,
                  "src": "3511:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ISClix_$6947",
                    "typeString": "contract ISClix"
                  },
                  "typeName": {
                    "id": 7349,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 7348,
                      "name": "ISClix",
                      "nameLocations": [
                        "3511:6:22"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6947,
                      "src": "3511:6:22"
                    },
                    "referencedDeclaration": 6947,
                    "src": "3511:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISClix_$6947",
                      "typeString": "contract ISClix"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7352,
                  "mutability": "mutable",
                  "name": "_receiver",
                  "nameLocation": "3540:9:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7366,
                  "src": "3524:25:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 7351,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3524:15:22",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3510:40:22"
            },
            "returnParameters": {
              "id": 7356,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3568:0:22"
            },
            "scope": 7474,
            "src": "3497:116:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7383,
              "nodeType": "Block",
              "src": "3676:43:22",
              "statements": [
                {
                  "expression": {
                    "id": 7377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7375,
                      "name": "nftId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7331,
                      "src": "3681:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7376,
                      "name": "_nftId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7368,
                      "src": "3689:6:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3681:14:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7378,
                  "nodeType": "ExpressionStatement",
                  "src": "3681:14:22"
                },
                {
                  "expression": {
                    "id": 7381,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7379,
                      "name": "price",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7333,
                      "src": "3700:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7380,
                      "name": "_price",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7370,
                      "src": "3708:6:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3700:14:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7382,
                  "nodeType": "ExpressionStatement",
                  "src": "3700:14:22"
                }
              ]
            },
            "functionSelector": "f901a18f",
            "id": 7384,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7373,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7372,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "3666:9:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "3666:9:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "3666:9:22"
              }
            ],
            "name": "setSale",
            "nameLocation": "3625:7:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7368,
                  "mutability": "mutable",
                  "name": "_nftId",
                  "nameLocation": "3638:6:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7384,
                  "src": "3633:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7367,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3633:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7370,
                  "mutability": "mutable",
                  "name": "_price",
                  "nameLocation": "3651:6:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7384,
                  "src": "3646:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7369,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3646:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3632:26:22"
            },
            "returnParameters": {
              "id": 7374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3676:0:22"
            },
            "scope": 7474,
            "src": "3616:103:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7472,
              "nodeType": "Block",
              "src": "3785:449:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 7394,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 7392,
                          "name": "nftId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7331,
                          "src": "3798:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 7393,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3806:1:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3798:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "73616c6520636c6f736564",
                        "id": 7395,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3809:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_352bdf8a0cb0bee8116b7a59d51c8b8c759faf101e8fbc574043058ea71c1835",
                          "typeString": "literal_string \"sale closed\""
                        },
                        "value": "sale closed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_352bdf8a0cb0bee8116b7a59d51c8b8c759faf101e8fbc574043058ea71c1835",
                          "typeString": "literal_string \"sale closed\""
                        }
                      ],
                      "id": 7391,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3790:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3790:33:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7397,
                  "nodeType": "ExpressionStatement",
                  "src": "3790:33:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 7404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 7399,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "3836:3:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 7400,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3840:5:22",
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "3836:9:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 7403,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 7401,
                            "name": "price",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7333,
                            "src": "3849:5:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 7402,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7388,
                            "src": "3857:6:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3849:14:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3836:27:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "696e76616c69642076616c7565",
                        "id": 7405,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3865:15:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2da5f8e96415ce1cf56ac601f863bdc4eb6ccd09c4a394ab789ec97e291c93e2",
                          "typeString": "literal_string \"invalid value\""
                        },
                        "value": "invalid value"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2da5f8e96415ce1cf56ac601f863bdc4eb6ccd09c4a394ab789ec97e291c93e2",
                          "typeString": "literal_string \"invalid value\""
                        }
                      ],
                      "id": 7398,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3828:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3828:53:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7407,
                  "nodeType": "ExpressionStatement",
                  "src": "3828:53:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "id": 7408,
                        "name": "userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7339,
                        "src": "3891:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 7411,
                      "indexExpression": {
                        "expression": {
                          "id": 7409,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3898:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7410,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3902:6:22",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3898:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3891:18:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 7412,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3913:1:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3891:23:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7455,
                  "nodeType": "IfStatement",
                  "src": "3888:265:22",
                  "trueBody": {
                    "id": 7454,
                    "nodeType": "Block",
                    "src": "3916:237:22",
                    "statements": [
                      {
                        "expression": {
                          "id": 7415,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "3922:8:22",
                          "subExpression": {
                            "id": 7414,
                            "name": "lastId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7335,
                            "src": "3922:6:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7416,
                        "nodeType": "ExpressionStatement",
                        "src": "3922:8:22"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 7422,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "baseExpression": {
                                  "id": 7418,
                                  "name": "userId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7339,
                                  "src": "3944:6:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 7420,
                                "indexExpression": {
                                  "id": 7419,
                                  "name": "refAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7386,
                                  "src": "3951:10:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3944:18:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "<",
                              "rightExpression": {
                                "id": 7421,
                                "name": "lastId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7335,
                                "src": "3965:6:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "3944:27:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "696e76616c6964207265662061646472657373",
                              "id": 7423,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3973:21:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_9e6a11b5f1e62b340382b92ad0b5f1f3887f4ba087e62111274d14a778c6343c",
                                "typeString": "literal_string \"invalid ref address\""
                              },
                              "value": "invalid ref address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_9e6a11b5f1e62b340382b92ad0b5f1f3887f4ba087e62111274d14a778c6343c",
                                "typeString": "literal_string \"invalid ref address\""
                              }
                            ],
                            "id": 7417,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967278,
                              4294967278
                            ],
                            "referencedDeclaration": 4294967278,
                            "src": "3936:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 7424,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3936:59:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7425,
                        "nodeType": "ExpressionStatement",
                        "src": "3936:59:22"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 7430,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "id": 7426,
                              "name": "userId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7339,
                              "src": "4004:6:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 7428,
                            "indexExpression": {
                              "id": 7427,
                              "name": "refAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7386,
                              "src": "4011:10:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4004:18:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 7429,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4026:1:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4004:23:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 7439,
                        "nodeType": "IfStatement",
                        "src": "4001:79:22",
                        "trueBody": {
                          "id": 7438,
                          "nodeType": "Block",
                          "src": "4029:51:22",
                          "statements": [
                            {
                              "expression": {
                                "id": 7436,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 7431,
                                    "name": "userReferral",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7347,
                                    "src": "4036:12:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                      "typeString": "mapping(address => address)"
                                    }
                                  },
                                  "id": 7434,
                                  "indexExpression": {
                                    "expression": {
                                      "id": 7432,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "4049:3:22",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 7433,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "4053:6:22",
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "4049:10:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "4036:24:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 7435,
                                  "name": "refAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7386,
                                  "src": "4063:10:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "4036:37:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 7437,
                              "nodeType": "ExpressionStatement",
                              "src": "4036:37:22"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 7445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 7440,
                              "name": "userId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7339,
                              "src": "4087:6:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 7443,
                            "indexExpression": {
                              "expression": {
                                "id": 7441,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4094:3:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 7442,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4098:6:22",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4094:10:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4087:18:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 7444,
                            "name": "lastId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7335,
                            "src": "4108:6:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4087:27:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7446,
                        "nodeType": "ExpressionStatement",
                        "src": "4087:27:22"
                      },
                      {
                        "expression": {
                          "id": 7452,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 7447,
                              "name": "idUser",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7343,
                              "src": "4120:6:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 7449,
                            "indexExpression": {
                              "id": 7448,
                              "name": "lastId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7335,
                              "src": "4127:6:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4120:14:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "id": 7450,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "4137:3:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 7451,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4141:6:22",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4137:10:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "4120:27:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 7453,
                        "nodeType": "ExpressionStatement",
                        "src": "4120:27:22"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 7459,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4177:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7460,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4181:5:22",
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "4177:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 7456,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7329,
                        "src": "4159:8:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 7458,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4168:8:22",
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "src": "4159:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 7461,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4159:28:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7462,
                  "nodeType": "ExpressionStatement",
                  "src": "4159:28:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 7466,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4203:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7467,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4207:6:22",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4203:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 7468,
                        "name": "nftId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7331,
                        "src": "4215:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 7469,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7388,
                        "src": "4222:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 7463,
                        "name": "nft",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7327,
                        "src": "4194:3:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ISClix_$6947",
                          "typeString": "contract ISClix"
                        }
                      },
                      "id": 7465,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4198:4:22",
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6946,
                      "src": "4194:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256) external"
                      }
                    },
                    "id": 7470,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4194:35:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7471,
                  "nodeType": "ExpressionStatement",
                  "src": "4194:35:22"
                }
              ]
            },
            "functionSelector": "cce7ec13",
            "id": 7473,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "buy",
            "nameLocation": "3733:3:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7386,
                  "mutability": "mutable",
                  "name": "refAddress",
                  "nameLocation": "3745:10:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7473,
                  "src": "3737:18:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7385,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3737:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7388,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3762:6:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 7473,
                  "src": "3757:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7387,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3757:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3736:33:22"
            },
            "returnParameters": {
              "id": 7390,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3785:0:22"
            },
            "scope": 7474,
            "src": "3724:510:22",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 7475,
        "src": "3076:1161:22",
        "usedErrors": []
      }
    ],
    "src": "33:4204:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.18+commit.87f61d96.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.13",
  "updatedAt": "2024-01-18T11:16:52.036Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}