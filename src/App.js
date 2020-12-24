import './App.css';
import MenuContainer from '@components/Menu/MenuContainer';
import Grid from '@components/Interface/Grid';
import StatusStrip from '@components/Menu/ToolStrip/Status/StatusStrip';

function App() {
  return (
    <div className="App">
      <MenuContainer className="Menu" />
      <Grid className="Interface" />
      <StatusStrip />
    </div>
  );
}

export default App;
