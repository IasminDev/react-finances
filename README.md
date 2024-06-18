npm install

in settings.json include
{
    "emmet.triggerExpansionOnTab": true,
    "emmet.showSuggestionsAsSnippets": true,
    "editor.snippetSuggestions": "top",
}

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i react-router-dom @types/react-router-dom -D
npm i axios @types/axios -D
npm i lucide-react
npm i dayjs
npm install -D tailwind-merge @tailwindcss/forms 

add project in vercel with git
npm i @vercel/analytics
npm i @vercel/speed-insights


<!-- 
Logica dos botões: quando clica no botão de lixeira, aparecer um popout com um "p" pedindo confirmação e dois botões, um de confirmar e um de cancelar ele some a linha da tabela que esta selecionada
Botão de editar vai aparecer um popout na tela com 4 inputs que recebem o valor original da tabela e vai ter um botão de 
confirmação e de cancelamento
caso clique fora do popout e contenha alterações aparecer uma mensagem, um p, que vai dizer que contem alterações e confirme ou cancele
caso clique fora do popout e nn contenha alterações manter informações na tabela e sumir o popout


Alterar cor do calendario para branco 
-->