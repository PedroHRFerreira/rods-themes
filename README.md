# Rods Themes

Cinco temas escuros para programar com personalidade: três com preto absoluto
e cores vibrantes, e dois com tons de grafite e contraste mais suave.
Disponíveis para **VS Code, IDEs JetBrains e Zed**.

Desenvolvido por [PedroHRFerreira](https://github.com/PedroHRFerreira).

## Escolha seu tema

| Tema | Fundo do editor | Cores de destaque |
| --- | --- | --- |
| Rods Black Neon | Preto absoluto `#000000` | Azul e ciano |
| Rods Black Emerald | Preto absoluto `#000000` | Verde, dourado e azul |
| Rods Black Ember | Preto absoluto `#000000` | Vermelho, dourado e laranja |
| Rods Dark Graphite | Grafite `#0D1117` | Laranja, verde e ciano |
| Rods Dark Midnight | Grafite azulado `#161B26` | Azul, lilás e verde suave |

Os temas Black mantêm o preto absoluto no editor e nos painéis.
Os temas Dark diferenciam editor, painéis e barras com tons de grafite.
Os nomes e as paletas são compartilhados; a renderização varia entre editores.

## VS Code

Instale Rods Themes pelo painel Extensions ou instale o arquivo da versão:

```bash
code --install-extension rods-themes-0.1.0.vsix
```

Também é possível usar **Extensions → … → Install from VSIX…**.
Abra **Preferences: Color Theme** e escolha um dos cinco temas.
Exemplo de configuração:

```json
{ "workbench.colorTheme": "Rods Dark Graphite" }
```

## JetBrains

Em **Settings → Plugins → ⚙ → Install Plugin from Disk…**, selecione
`build/jetbrains/rods-themes-0.1.0.zip` e reinicie a IDE se solicitado.
Escolha o tema em **Settings → Appearance & Behavior → Appearance → Theme**.
O plugin inclui os temas de interface e os respectivos esquemas do editor.
Compatível com a plataforma IntelliJ desde o build 241.

## Zed

O arquivo `build/zed/rods-themes.json` contém os cinco temas.
No Linux e no macOS, copie-o para a pasta de temas do Zed:

```bash
mkdir -p ~/.config/zed/themes
cp build/zed/rods-themes.json ~/.config/zed/themes/rods-themes.json
```

No Windows, use `%USERPROFILE%\AppData\Roaming\Zed\themes\`.
Se usar um diretório de configuração personalizado, utilize sua pasta `themes`.
Reabra o Zed, execute **theme selector: toggle** na paleta de comandos e
escolha um dos cinco nomes. Veja a [documentação do Zed](https://zed.dev/docs/themes).
Esta versão fornece instalação local; ainda não é distribuída pela loja do Zed.

## Atualizando da versão 0.0.x

A versão 0.1.0 substitui todos os temas de países por esta coleção de cinco.
Após atualizar, selecione novamente um tema e atualize configurações que
referenciem os nomes antigos. Não há aliases dos temas removidos.
Confira as [notas da versão](CHANGELOG.md).

## Desenvolvimento e distribuição

```bash
npm ci
npm run build:all
npm run validate
npm run package:all
```

`package:all` valida as três saídas e gera o VSIX. Entregáveis:
`rods-themes-0.1.0.vsix`, `build/jetbrains/rods-themes-0.1.0.zip` e
`build/zed/rods-themes.json`. A publicação nas lojas é manual.

O catálogo fica em `src/palettes/collection.ts`. Os adaptadores ficam em
`src/theme/`, `src/jetbrains/` e `src/zed/`. Use `npm test` para testar os
contratos e `npm run check` para conferir os tipos.
`npm run preview` gera uma prévia ilustrativa em `build/preview/index.html`.

O projeto usa Rods SDK para governança e Context Engine. Comandos:
`npm run context:ingest`, `npm run context:search -- "palettes theme"` e
`npm run rods:upgrade:dry-run`.
