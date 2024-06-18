import './App.css'
import WeatherComponent from './components/WeatherComponent'

function App() {

  return (
    <>
      <WeatherComponent />
      <div className="flex justify-center fixed bottom-5 flex-col content-center w-full github">
        <button className=" bg-gray-600 text-center mx-auto text-white p-3 rounded-lg"><a href="https://github.com/mbithi002/weatherApp" target='_blank'><i class="fa-brands fa-github mx-2"></i>Open Github repo</a></button>
      </div>
    </>
  )
}

export default App