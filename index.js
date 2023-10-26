import util from 'ethereumjs-util'

const tx = {
  '@type': '/ethermint.evm.v1.MsgEthereumTx',
  data: {
    '@type': '/ethermint.evm.v1.DynamicFeeTx',
    chain_id: '4157', // chain id
    nonce: '0', // nonce
    gas_tip_cap: '1500000000',
    gas_fee_cap: '12001500000000',
    gas: '21000', // gas limit
    to: '0xAA8231c61bf99cA35C12C8B732799170dbF1B6AD', // to
    value: '10000000000000000000', // value
    data: null, // data - null = 0x
    accesses: [],
    v: 'AQ==',
    r: 'JAx3mmbiKfSictwZowYbXGIiZlaD9LaGub2YJlsw63o=',
    s: 'eTws/9+hp83TxMITpVUoDV5CsS3t2xcMnruSCsG9xuk='
  },
  size: 0,
  hash: '0xd2912b4d2b191b47b014b6a05737ceb15bb0e6c17b6e8a23b083228ec4aa424b',
  from: ''
}

const hash = '0xd2912b4d2b191b47b014b6a05737ceb15bb0e6c17b6e8a23b083228ec4aa424b'
const v = 'AQ=='
const r = 'JAx3mmbiKfSictwZowYbXGIiZlaD9LaGub2YJlsw63o='
const s = 'eTws/9+hp83TxMITpVUoDV5CsS3t2xcMnruSCsG9xuk='
const chainId = '4157'

const formatBase64 = (str) => {
  const buffer = Buffer.from(str, 'base64')
  return util.bufferToHex(buffer)
}

console.log({
  hash1: Buffer.from(hash, 'hex'),
  r1Buff: Buffer.from(r, 'base64'),
  r2Buff: Buffer.from('240c779a66e229f4a272dc19a3061b5c6222665683f4b686b9bd98265b30eb7a', 'hex'),
  chainId: `0x${Number(chainId).toString(16)}`
})

const pubKey = util.ecrecover(
  util.toBuffer(hash),
  Buffer.from(v, 'base64'),
  Buffer.from(r, 'base64'),
  Buffer.from(s, 'base64'),
  Number(chainId)
)
const addrBuf = util.pubToAddress(pubKey)
const addr = util.bufferToHex(addrBuf)

console.log({ pubKey, addr })
