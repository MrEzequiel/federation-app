# React Micro FrontEnd com Module Federation

Exemplo de uso do React no padrão micro-frontend host-remote com Webpack Module Federation. Usado para uma [apresentação](https://www.figma.com/proto/jdxdZtxKnpHZSXw1Nk7knz/Module-Federation?type=design&node-id=1-2&t=VAERuuuPWSXzzofB-8&scaling=min-zoom&page-id=0%3A1&hide-ui=1) sobre micro frontend.

## How to use

Execute os seguintes comandos no diretório raiz.

```bash
pnpm install

cd host
pnpm install

cd ..
cd remote
pnpm install

cd ..
pnpm start # mode dev
```

Navigate to:

- `http://localhost:3001` for the host app
- `http://localhost:3002` for the remote app

## Host App

Extrair `<Button />` do aplicativo remoto e os renderiza. Exemplo:

```js
const RemoteButton = React.lazy(() => import("remote/Button"));
```

## Remote App

Expõe os módulos em um arquivo `moduleEntry.js` em `http://localhost:3002/moduleEntry.js`

`name: 'remote'`

Exposes:

- `<Button />`
