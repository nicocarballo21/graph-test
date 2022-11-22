import {Address, BigDecimal, BigInt, dataSource, log} from '@graphprotocol/graph-ts';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)
export let DAY = BigDecimal.fromString('86400')

const network = dataSource.network();

// ***********************************************************************
//                    IMPLEMENT FOR EACH NETWORK
// ***********************************************************************

// minimum liquidity for price to get tracked = 0.01 ETH
export const MINIMUM_LIQUIDITY_THRESHOLD_USD = BigDecimal.fromString('100')

export function wethAddress(): Address {
  if (network == 'fantom') {
    return Address.fromString('0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83');
  }
  return Address.fromString(ADDRESS_ZERO);
  // } else if (network == 'bsc') {
  //   return Address.fromString(ADDRESS_ZERO); //todo
  // } else if (network == 'fuji') {
  //   return Address.fromString(ADDRESS_ZERO);//todo
  // } else {
  //   log.critical("UNKNOWN NETWORK {}", [network])
  //   return Address.fromString(ADDRESS_ZERO);
  // }
}

export function usdcAddress(): Address {
  if (network == 'fantom') {
    return Address.fromString('0x04068da6c83afcfa0e13ba15a6696662335d5b75');
  } 
  // else if (network == 'bsc') {
  //   return Address.fromString(ADDRESS_ZERO); //todo
  // } else if (network == 'fuji') {
  //   return Address.fromString(ADDRESS_ZERO);//todo
  // } else {
  //   log.critical("UNKNOWN NETWORK {}", [network])
  //   return Address.fromString(ADDRESS_ZERO);
  // }
  return Address.fromString(ADDRESS_ZERO);

}

export function usdcWethPairAddress(): Address {
  if (network == 'fantom') {
    return Address.fromString('0x772bC1196C357F6E9c80e1cc342e29B3a5F05ef3');
  }
  //  else if (network == 'bsc') {
  //   return Address.fromString(ADDRESS_ZERO); //todo
  // } else if (network == 'fuji') {
  //   return Address.fromString(ADDRESS_ZERO);//todo
  // } else {
  //   log.critical("UNKNOWN NETWORK {}", [network])
  //   return Address.fromString(ADDRESS_ZERO);
  // }
  return Address.fromString(ADDRESS_ZERO);

}

// token where amounts should contribute to tracked volume and liquidity
export function whitelisted(): Address[] {
  if (network == 'fantom') {
    return [
      wethAddress(),
      usdcAddress(), // USDC
      Address.fromString('0x5Cc61A78F164885776AA610fb0FE1257df78E59B'), // SPIRIT
      Address.fromString('0xd6070ae98b8069de6B494332d1A1a81B6179D960'), // BIFI
      Address.fromString('0x1E4F97b9f9F913c46F1632781732927B9019C68b'), // CRV
      Address.fromString('0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E'), // DAI
      Address.fromString('0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355'), // FRAX
      Address.fromString('0x7d016eec9c25232b01F23EF992D98ca97fc2AF5a'), // FXS
      Address.fromString('0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9'), // LQDR
      Address.fromString('0x82f0B8B456c1A451378467398982d4834b6829c1'), // MIM
      Address.fromString('0xfb98b335551a418cd0737375a2ea0ded62ea213b'), // MIMATIC
      Address.fromString('0x9Fb9a33956351cf4fa040f65A13b835A3C8764E3'), // MULTICHAIN
      Address.fromString('0x321162Cd933E2Be498Cd2267a90534A804051b11'), // WBTC
      Address.fromString('0x74b23882a30290451A17c44f4F05243b6b58C76d'), // WETH
      Address.fromString('0x049d68029688eAbF473097a2fC38ef61633A3C7A'), // fUSDT
    ]
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return [Address.fromString(ADDRESS_ZERO)];
  }
}

export function stablecoins(): Address[] {
  if (network == 'fantom') {
    return [
      usdcAddress(), // USDC
      Address.fromString('0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E'), // DAI
      Address.fromString('0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355'), // FRAX
      Address.fromString('0x82f0B8B456c1A451378467398982d4834b6829c1'), // MIM
      Address.fromString('0xfb98b335551a418cd0737375a2ea0ded62ea213b'), // MIMATIC
      Address.fromString('0x049d68029688eAbF473097a2fC38ef61633A3C7A'), // fUSDT
    ]
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return [Address.fromString(ADDRESS_ZERO)];
  }
}
