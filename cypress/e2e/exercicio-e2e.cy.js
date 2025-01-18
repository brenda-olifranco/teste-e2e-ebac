///<reference types = "cypress"/>
import { faker } from '@faker-js/faker';


import produtosPage from "../support/page_objects/produtos.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      produtosPage.visitarUrl()
  });

  it('Deve buscar produto da lista', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('.product_title').should('exist')
        produtosPage.adicionarCarrinho('S', 'Blue', 1)
        cy.get('.single_add_to_cart_button').click()
        
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        cy.get('.product_title').should('exist')
        produtosPage.adicionarCarrinho('S', 'Blue', 1)
        cy.get('.single_add_to_cart_button').click()
      
        produtosPage.buscarProduto('Hero Hoodie')
        produtosPage.adicionarCarrinho('L', 'Green', 2)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click() 

        cy.get('#billing_first_name').type(faker.person.firstName())
        cy.get('#billing_last_name').type(faker.person.lastName())
        cy.get('#billing_address_1').type('Rua Bellor')
        cy.get('#billing_city').type('São Paulo')
        cy.get('#billing_postcode').type(faker.address.zipCode('#####-###'))
        cy.get('#billing_phone').type('(11) 1234-5678')
        cy.get('#billing_email').type(faker.internet.email())

        cy.get('#terms').click()
        cy.get('#place_order').click()




            
  });


}) 

  

  

