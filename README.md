# Documento de visão
# Projeto de Empresa
## 1. Introdução
### 1.1 Resumo

   O propósito deste documento é expor as necessidades e funcionalidades gerais do sistema, definindo os requisitos 
   em conformidade ao termos de necessidades dos usuários finais.

### 1.2 Escopo

__Responsabilidades do sistema__

+ Gerenciar Vendedores: O sistema cria, deleta, atualiza e visualiza dados dos vendedores.
+ Gerenciar Clientes: O sistema cria, deleta, atualiza e visualiza dados dos clientes.
+ Gerenciar Produtos: O sistema cria, deleta, atualiza e visualiza dados dos produtos.


__O que o sistema não se compromete a realizar__

+ Gerenciamento de controle de vendas: O sistema não tem controle e responsabilidade na venda dos produtos.
+ Garantia de existência real do estoque: O sistema não garante a disponibilidade real do estoque dos produtos.
+ Gerenciamento fiscal: O sistema sob hipótese alguma será responsável por fiscalização dos produtos.
+ Gerenciamento de qualidade: O sistema não faz controle de qualidade dos produtos.
 


## 2. Requisitos

### 2.1 Requisitos Funcionais

| Cod. | Nome | Descrição | Categoria |
| -------- | -------- | -------- | -------- |
| F01 | Cadastrar vendedor | O sistema deve registrar o cadastro de novos vendedores, solicitando algumas infomações e evitando cadastros duplicados. | Evidente |
| F02 | Editar cadastro de vendedor | O sistema deve permitir a alteração das informações de um vendedor já cadastrado. | Evidente |
| F03 | Deletar cadastro de vendedor | O sistema deve permitir deletar de um cadastro já existente, se assim for solicitado. | Evidente |
| F04 | Visualizar dados de vendedor | O sistema deve permitir a visualização de dados de um vendedor. | Evidente |
| F05 | Cadastrar cliente | O sistema deve registrar o cadastro de novos clientes, solicitando algumas infomações e evitando cadastros duplicados. | Evidente |
| F06 | Editar cadastro de cliente | O sistema deve permitir a alteração das informações de um cliente já cadastrado. | Evidente |
| F07 | Deletar cadastro de cliente | O sistema deve permitir deletar de um cadastro já existente, se assim for solicitado. | Evidente |
| F08 | Visualizar dados de cliente | O sistema deve permitir a visualização de dados de um cliente. | Evidente |
| F09 | Cadastrar produto | O sistema deve registrar o cadastro de novos produtos, solicitando algumas infomações e evitando cadastros duplicados. | Evidente |
| F10 | Editar cadastro de produto | O sistema deve permitir a alteração das informações de um produto já cadastrado. | Evidente |
| F11 | Deletar cadastro de produto | O sistema deve permitir deletar de um cadastro já existente, se assim for solicitado. | Evidente |
| F12 | Visualizar dados de produto | O sistema deve permitir a visualização de dados de um produto. | Evidente |

### 2.2 Requisitos não funcionais

| Cod. | Nome | Descrição | Categoria |
| -------- | -------- | -------- | -------- |
| FN01 | Dados essenciais | Existem dados que são requisitos obrigatórios. | Obrigatório |
| FN02 | Desenvolvimento do backend | O sistema deve ser desenvolvido na liguagem Java 8+. | Obrigatório |
| FN03 | Framework backend | O framework utilizado deve ser o Spring versão 2+. | Obrigatório |
| FN04 | Desenvolvimento do frontend | O sistema deve ser desenvolvido com a linguagem JavaScript e TypeScript. | Obrigatório |
| FN05 | Framework frontend | O framework utilizado deve ser o Angular versão 8+. | Obrigatório |

### 2.3. Casos de Uso

| Cod. | Caso de Uso | Descrição |
| -------- | -------- | -------- |
| UC01 | Cadastrar vendedor |A Empresa pode cadastrar no sistema novos vendedores|
| UC03 | Visualizar dados vendedor | O sistema exibe os dados do vendedor |
| UC04 | Editar vendedor|A Empresa pode editar os dados de um vendedor|
| UC05 | Excluir  vendedor| A Empresa pode excluir um vendedor |
| UC06 | Listar vendedores | O sistema lista os vendedores cadastrados|
| UC07 | Cadastrar cliente |A Empresa pode cadastrar no sistema novos clientes|
| UC09 | Editar cliente| A Empresa pode editar os dados de um cliente|
| UC10 | Excluir  cliente| A Empresa pode excluir um cliente|
| UC11 | Listar clientes | O sistema lista os clientes cadastrados|
| UC12 | Cadastrar produto |A Empresa pode cadastrar no sistema novos produtos|
| UC13 | Editar produto|A Empresa pode editar os dados de um produto|
| UC14 | Excluir  produto| A Empresa pode excluir um produto |
| UC15 | Listar produtos | O sistema lista os produtos cadastrados|


### 2.4. Atores

| Ator | Descrição |
| -------- | -------- |
| Empresa | Usuário responsavel pelo gerenciamento do sistema. |
| Vendedor | Usuário responsavel pelas vendas. |
| Cliente | Usuário que realizam compras de produtos do sistema. |
