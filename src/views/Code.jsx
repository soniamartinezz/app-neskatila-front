import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
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
    <>
      <main className='container'>
        {data && data.map((item, index) => (
          <section className="content" key={index} onClick={() => handleClick(item)}>
            <details>
              <summary>{item.path}</summary>
            </details>
            {expandedFiles[item.path] && 
              <pre className='code'>{fileContent[item.path]}</pre>
            }
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Code;