<!DOCTYPE html>
<html lang="PT-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <title>Sistema de Fiados</title>
  </head>
  <body>
    <header class="header">
      <nav class="cabecalho">
        <div class="cabecalho-esquerda">
          <button class="menu-hamb">
            <img src="img/Menu Aberto.svg" alt="Menu" />
          </button>
          <h1 class="titulo-principal">Sistema de Fiados</h1>
        </div>
        <div class="cabecalho-direita">
          <div class="caixa-info">
            <p class="titulo-caixa">CAIXA TOTAL</p>
            <p class="caixa-valor">R$ 0,00</p>
          </div>
        </div>
      </nav>
    </header>

    <main class="main">
      <div class="container-principal">
        <div class="container-barras">
          <section class="container-registro">
            <div class="form-grupo">
              <input class="form-input" type="text" placeholder="Nome do cliente" />
              <button type="button" class="botao-adicionar">
                <img src="img/adicionar.png" alt="Adicionar" class="adc-logo" />
              </button>
            </div>
          </section>

          <section class="container-pesquisa">
            <div class="form-grupo">
              <input class="form-input" type="text" placeholder="Pesquisar cliente" id="pesquisa-input" />
              <button type="button" class="botao-pesquisar">
                🔍
              </button>
            </div>
          </section>
        </div>
        
        <section class="container-pessoas">
          <!-- Os cards de pessoas serão inseridos aqui dinamicamente -->
        </section>
      </div>
    </main>
    <script src="scripts/price-calc.js" type="module"></script>
    <script src="scripts/register.js" type="module"></script>
  </body>
</html>
