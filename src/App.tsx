import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='Content'>
        <div className='FirstContainer'>
            <h2>About Me</h2>
            <div className='Panel'>
              Hey there, I'm Kan, a Frontend developer who also happen to likes minecraft addons modding, especially 3d modelling. Pretty fluent in modelling and animating it, and a little bit in texturing.
              <br/>
              <br/>
              Feel free to contact me at discord <h3>kan#9105</h3>
              Below are some of my 3d models I've made optimized for minecraft.
            </div>
        </div>
        <div className='SecondContainer'>
          <h2>
            Gallery
          </h2>
          <br/>
          <br/>
          <div className='Models'>
            <iframe width="640" height="480" src="https://sketchfab.com/playlists/embed?collection=0f393633941a41aa9f7637b348d76b9f&autostart=0"
              title="Kaines models"
              frameBorder={0}
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
