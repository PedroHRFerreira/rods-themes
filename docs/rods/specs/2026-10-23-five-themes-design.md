# Rods Themes 0.1.0

Plano confirmado pelo usuário em 23/10/2026 para implementação.

## Coleção

- Rods Black Neon: preto absoluto, azul e ciano.
- Rods Black Emerald: preto absoluto, verde, dourado e azul.
- Rods Black Ember: preto absoluto, vermelho, dourado e laranja.
- Rods Dark Graphite: editor #0D1117, painéis #202127, barras #303136.
- Rods Dark Midnight: editor #161B26, painéis #1E2433, barras #282F40.

Graphite usa laranja, verde e ciano; Midnight usa azul, lilás e verde suave.
A imagem fornecida orienta a hierarquia dos fundos do Graphite.

## Arquitetura

Um catálogo com cinco paletas e superfícies abastece os adaptadores VS Code,
JetBrains e Zed. Remover temas de países, combinações e saídas obsoletas.
Preservar os identificadores das extensões e as versões mínimas de IDE.
Não alterar a fonte ou a organização do editor do usuário.

## Entrega

Preparar versão 0.1.0, descrições em português, README e changelog.
Gerar VSIX, ZIP JetBrains e uma família JSON Zed com cinco temas dark.
Instalação pessoal e publicação nas lojas ficam para uma etapa posterior.

## Aceite

- Cinco nomes consistentes nas três plataformas.
- Três fundos pretos e dois suaves, inclusive no editor JetBrains.
- JSON Zed válido conforme schema oficial v0.2.0.
- Pacotes sem temas antigos ou referências quebradas.
- Tipos e verificações de qualidade passando; geração repetível.
- Conferir sintaxe, seleção, abas, painéis, terminal e diferenças de código.
- Documentar qualquer limitação de validação visual nas IDEs reais.
