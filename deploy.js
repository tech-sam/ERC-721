const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'salon earth way amazing approve barrel slot pond aware tackle jacket average',
    'https://rinkeby.infura.io/v3/822b76c77818489eaeb3165a59d7be2c'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('--attempting to deploy from account ---', accounts[0]);

  const  result =  await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000',gasPrice: '5000000000', from: accounts[0] });

        console.log('Contract deployed to ',result.options.address);
        console.log('--result ---',result);



};

deploy();

