# 개요
컴포넌트를 분리하는 방법, 객체값이 있는 파일을 불러와 활용하는 방법, 조건문을 두어 조건에 알맞는 양식을 보여주는 방법을 배웠습니다. 

# frontend 실행법 
```
npm install
npm run dev
```

# frontend 파일 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜components.png
 ┃ ┣ 📜config.png
 ┃ ┣ 📜jsx-ui.png
 ┃ ┣ 📜react-core-concepts.png
 ┃ ┗ 📜state-mgmt.png
 ┣ 📂components
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.css
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📜CoreConcept.jsx
 ┃ ┣ 📜CoreConcepts.jsx
 ┃ ┣ 📜Examples.jsx
 ┃ ┣ 📜Section.jsx
 ┃ ┣ 📜TabButton.jsx
 ┃ ┗ 📜Tabs.jsx
 ┣ 📜App.jsx
 ┣ 📜data.js
 ┣ 📜index.css
 ┗ 📜index.jsx
```

폴더[파일]명 | 설명
--|--|
assets | 홈페이지 상단에 있는 이미지들을 모아둔 곳
component/CoreConcepts | 객체값을 가져와 map으로 image, title, description값을 가져와 활용한다.
component/Examples | UseState를 활용하여 Component, Jsx, Props, state버튼을 클릭하면 해당 값을 저장하고, 삼항연산자를 이용해 useState값이 없다면 버튼을 클릭하라 요구하고, 클릭하면 각각의 이름으로 저장된 EXAMPLES에서 값을 가져와서 보여준다.



