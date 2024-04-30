import React, { useEffect, useState } from 'react';
import axios from 'axios';
    
function Code() {
  const [data, setData] = useState(null);
  const [path, setPath] = useState('src'); // establece la ruta inicial a 'src'
  const [fileContent, setFileContent] = useState({});
  const [expandedFiles, setExpandedFiles] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/repos/Mikelapra/Neskatila/contents/${path}`,
      );
      setData(result.data);
    };
    fetchData();
  }, [path]);

  const handleClick = async (item) => {
    if (item.type === 'dir') {
      setPath(item.path);
    } else if (item.type === 'file') {
      if (expandedFiles[item.path]) {
        setExpandedFiles(prevState => ({ ...prevState, [item.path]: false }));
      } else {
        if (!fileContent[item.path]) {
          const result = await axios(item.url);
          const decodedContent = atob(result.data.content);
          setFileContent(prevState => ({ ...prevState, [item.path]: decodedContent }));
        }
        setExpandedFiles(prevState => ({ ...prevState, [item.path]: true }));
      }
    }
  };

  return (
    <div>
      {data && data.map((item, index) => (
        <div key={index} onClick={() => handleClick(item)}>
          <h3>{item.path}</h3>
          {expandedFiles[item.path] && <pre>{fileContent[item.path]}</pre>}
        </div>
      ))}
    </div>
  );
};

export default Code;