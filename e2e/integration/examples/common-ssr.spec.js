/// <reference types="cypress" />

describe('SSR', () => {
  it('SSR mode shoube be render successful', () => {
    cy.visit('http://localhost:3000')
    cy.wait(10000)
    cy.window().its('__USE_SSR__').should('equal', true)
    cy.get('.defaultItemBg').should('exist')
    cy.get('.defaultItemBg').first().click()
    cy.contains('王牌对王牌 第五季').should('exist')
    cy.go('back') // 路由 回退 上一个页面 需要能被正常渲染
    cy.get('.defaultItemBg').should('exist')
  })
  it('SSR mode detail Page shoube be render successful', () => {
    cy.visit('http://localhost:3000/detail/cbba934b14f747049187')
    cy.window().its('__USE_SSR__').should('equal', true)
    cy.contains('王牌对王牌 第五季').should('exist')
  })
  it('CSR mode shoube be render successful', () => {
    cy.visit('http://localhost:3000?csr=true')
    cy.window().its('__USE_SSR__').should('not.exist')
    cy.get('.defaultItemBg').should('exist')
    cy.get('.defaultItemBg').first().click()
    cy.contains('王牌对王牌 第五季').should('exist')
    cy.go('back')
    cy.get('.defaultItemBg').should('exist')
  })
  it('CSR mode detail Page shoube be render successful', () => {
    cy.visit('http://localhost:3000/detail/cbba934b14f747049187?csr=true')
    cy.window().its('__USE_SSR__').should('not.exist')
    cy.contains('王牌对王牌 第五季').should('exist')
  })
})
