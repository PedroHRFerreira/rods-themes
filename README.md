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

## Instalação

```bash
code --install-extension rods-themes-0.0.2.vsix
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
pnpm build
pnpm validate
pnpm package
```

## Ajustes Visuais

As paletas ficam em `src/palettes/countries.ts`.
As regras compartilhadas de UI, TextMate e semantic tokens ficam em `src/theme/`.
