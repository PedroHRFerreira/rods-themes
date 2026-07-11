# Rods Themes

Coleção de temas dark/neon para VS Code inspirada nas seleções da Copa do Mundo.
Todos os temas usam fundo preto absoluto `#000000` com cores neon de seleções
individuais ou combinações sortidas.

Desenvolvido por [PedroHRFerreira](https://github.com/PedroHRFerreira).

## Temas

- Argentina, Spain, France, England e Portugal.
- Brazil, Morocco, Netherlands, Belgium e Germany.
- Argentina + Morocco, Brazil + France, Spain + Portugal.
- England + Netherlands e Belgium + Germany.
- Jamaica, Senegal, Cabo Verde, South Korea e Colombia.
- Japan, Mexico, Uruguay, Croatia e United States.
- Jamaica South Korea, Senegal Netherlands, Cabo Verde Brazil, Colombia France e Morocco Portugal.

## Instalação

```bash
code --install-extension rods-themes-0.0.4.vsix
```

Você também pode instalar pelo VS Code em Extensions, menu `...`, opção
`Install from VSIX...`.

## Exemplo de settings.json

```json
{
  "workbench.colorTheme": "Rods Themes: Brazil Neon Black",
  "editor.fontFamily": "'Audiowide', monospace",
  "editor.fontSize": 22,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.wordWrap": "on",
  "editor.stickyScroll.enabled": false
}
```

Para trocar de seleção, altere apenas o valor de `workbench.colorTheme`.

```json
{
  "workbench.colorTheme": "Rods Themes: Argentina Neon Black"
}
```

## Desenvolvimento

```bash
npm run build
npm run validate
npm run package
```

## Rods SDK

```bash
npm run rods:init
npm run rods:sync
npm run rods:doctor
npm run context:project:add
npm run context:ingest
npm run context:stats
npm run context:search -- "search term"
npm run context:read -- <chunkId>
```

Os comandos `context:*` usam um wrapper local que fixa a raiz do repositório e o
`CONTEXT_ENGINE_HOME` absoluto em `.context-engine`, evitando erros de sessão
como `unable to open database file`.

## Ajustes Visuais

As paletas ficam em `src/palettes/countries.ts`.
As regras compartilhadas de UI, TextMate e semantic tokens ficam em `src/theme/`.
