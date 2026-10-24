# Zed

`theme-family.ts` adapta o catálogo compartilhado ao formato do Zed.
`npm run build:zed` gera `build/zed/rods-themes.json` com cinco temas.

O schema em `themes.schema.json` é uma cópia compacta do schema oficial
https://zed.dev/schema/themes/v0.2.0.json, consultado em 23/10/2026.
Ele permite validar a saída sem depender de rede durante os testes.
O teste também rejeita propriedades de estilo desconhecidas, que o schema
oficial permite por padrão e o editor pode ignorar silenciosamente.
