## Note

First ensure the following are installed in the target system
- Latest `Node.js` version for `npm`
- Latest version of `pnpm` for `Node,js` package management

1. Create a new Gatsby site
    
    ```shell
    # adapted from npm init gatsby
    pnpm create gatsby
    ```
    
    Start by going to the directory with
    
    ```shell
    cd frontend
    ```
    
    Start the local development server with
    
    ```shell
    npm run develop
    ```
    
    See all commands at [Gatsby](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)

2. Add Dependency on React Material UI (MUI)

```shell
pnpm add @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material
```

Then you can import it in your entry point like this:

```javascript
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```
