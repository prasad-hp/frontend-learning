import { useContext } from 'react';
import ContextTheme from '../context/Theme';

function Check() {
  const theme = useContext(ContextTheme);

  console.log("Check theme:", theme);

  return (
    <div>
      {theme}
    </div>
  );
}

export default Check;
