import logo from './logo.svg';
import './App.css';
import AdsContainer from './components/AdsContainer'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>
function App() {
  return (
    <div class="full-screen">
  <div>
    <h1>Company Ads</h1>
    <br/>
    <AdsContainer/>
    
  </div>
</div>
   
  );
}

export default App;
