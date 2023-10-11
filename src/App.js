import { applyValue, JsonViewer } from '@textea/json-viewer';
import { useCallback, useEffect, useState } from 'react';

const example = {
  string: 'Lorem ipsum dolor sit amet',
  integer: 42,
  float: 114.514,
  bigint: 10086n,
  null: null,
  undefined,
  timer: 0,
  date: new Date('Tue Sep 13 2022 14:07:44 GMT-0500 (Central Daylight Time)'),
};

const App = () => {
  const [src, setSrc] = useState(() => example);

  const handleChange = useCallback((path, oldValue, newValue) => {
    setSrc((src) => applyValue(src, path, newValue));
  }, []);

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <JsonViewer
        style={{ fontSize: "20px" }}
        value={src}
        editable={true}
        theme={"auto"}
        indentWidth={20}
        highlightUpdates={true}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
