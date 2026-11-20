# Costa e Albuquerque Advocacia

Site institucional em português brasileiro, com foco em Direito Aéreo e defesa dos passageiros. Os arquivos HTML, CSS, JavaScript, a imagem e as fontes são servidos diretamente, sem compilação ou instalação de pacotes.

## Visualizar

Abra `index.html` em um navegador. Para revisar por HTTP, execute na pasta do projeto:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Na mesma máquina, acesse `http://127.0.0.1:4173`. Encerre o servidor com Ctrl+C.

## Editar

- **Textos e navegação:** edite `index.html`. Os títulos identificam as seções. Preserve os atributos `id` associados aos links do menu.
- **WhatsApp:** os links usam `https://wa.me/` com o número internacional e a mensagem no parâmetro `text`. Ao trocar o contato, atualize todos os links, o número visível e os rótulos de acessibilidade.
- **Imagem de abertura:** substitua `assets/asa-ao-entardecer.webp` por uma imagem WebP otimizada. A imagem atual é uma ilustração fotorrealista gerada para o site. Ao trocar a cena ou a proporção, ajuste o texto alternativo e as dimensões da imagem em `index.html`.
- **Fotos das advogadas:** a seção `#sobre` tem um elemento `article` por profissional. Uma foto real autorizada pode ser inserida antes do nome com um elemento `img`. O seletor `.team img` já define o recorte.
- **Identidade visual:** ajuste as cores em `:root` e as regras responsivas em `styles.css`. As fontes são locais e suas licenças estão em `assets/fonts/`.
- **Menu móvel:** o comportamento está em `site.js`. As perguntas frequentes usam os elementos HTML nativos `details` e `summary`.

Para hospedagem estática, envie `index.html`, `styles.css`, `site.js` e a pasta `assets/`, mantendo a estrutura.
