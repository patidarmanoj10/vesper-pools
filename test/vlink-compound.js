'use strict'

const {shouldBehaveLikePool} = require('./behavior/vesper-pool')
const {shouldBehaveLikeStrategy} = require('./behavior/compound-strategy')
const {setupVPool} = require('./utils/setupHelper')

const VLINK = artifacts.require('VLINK')
const CompoundStrategy = artifacts.require('CompoundStrategyLINK')
const Controller = artifacts.require('Controller')

contract('vLINK Pool with Compound strategy', function (accounts) {
  beforeEach(async function () {
    await setupVPool(this, {
      controller: Controller,
      pool: VLINK,
      strategy: CompoundStrategy,
      feeCollector: accounts[9],
      strategyType: 'compound',
    })

    this.newStrategy = CompoundStrategy
  })

  shouldBehaveLikePool('VLINK', 'VLINK', 'cLNK', accounts)
  shouldBehaveLikeStrategy('VLINK', 'LINK', accounts)
})
