import '../css/HomePage.css';

export const HomePage = () => {
  return (
    <div className='background'>
      <div className='overlay'>
        <div className='content-center'>
          <h1 className='greeting'>Hello I'm</h1>
          <h2 className='name'>Komarovskyi Daniil</h2>
          <h3 className='profession'>I'm a Frontend Developer</h3>
        </div>
        <div className='photo-placeholder'></div>
      </div>
    </div>
  );
}

//    background: url('../assets/Danya.jpg') no-repeat center center;