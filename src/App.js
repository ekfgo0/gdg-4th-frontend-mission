import './App.css';

function App() {
  const handleClick = () => {
    console.log("안녕하세요! 저는 문선영입니다.");
  };

  return (
    <div className="App">
      <h1>안녕하세요! 저는 문선영입니다.</h1>
      <img
        src="/my_photo.jpeg"
        alt="내 사진"
        style={{ width: '150px', borderRadius: '50%' }}
      />
      <p>홍익대학교 컴퓨터공학과 재학중</p>
      <p>25세</p>
      <ul>
        <li>좋아하는 동물: 강아지</li>
        <li>좋아하는 영화: 이터널 션샤인</li>
        <li>좋아하는 음식: 부대찌개</li>
      </ul>
      <button onClick={handleClick}>인사하기</button>
    </div>
  );
}

export default App;
