import random from 'lodash/random'

// Array of available nodes to connect to
export const nodes ={
  "56" :[process.env.REACT_APP_BSC_NODE_1, process.env.REACT_APP_BSC_NODE_2, process.env.REACT_APP_BSC_NODE_3],
  "97" :[process.env.REACT_APP_BSC_TESTNET_NODE_1, process.env.REACT_APP_BSC_TESTNET_NODE_2, process.env.REACT_APP_BSC_TESTNET_NODE_3],
  "137" : [process.env.REACT_APP_MATIC_NODE],
  "80001" : [process.env.REACT_APP_MATIC_TESTNET_NODE]
} 

const getNodeUrl = (network) => {
    const randomIndex = random(0, nodes[network].length - 1)
    return nodes[network][randomIndex]
  
}

export default getNodeUrl
