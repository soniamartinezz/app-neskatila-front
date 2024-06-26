import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';
    
function Code() {
  const [data, setData] = useState(null);
  const [path, setPath] = useState('lib'); // establece la ruta inicial a 'src'
  const [fileContent, setFileContent] = useState({});
  const [expandedFiles, setExpandedFiles] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/repos/Mikelapra/Neskatila/contents/src/${path}`,
      );
      setData(result.data);
    };
    fetchData();
  }, [path]);

  const handleChangeMode = async (item) => {
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
      <section className="content list-code">
          <p>Aquí se podrá visualizar el código fuente de Neskatila, incluyendo ejemplos de componentes desarrollados con React mediante la dependencia. Para facilitar la comprensión, se incluyen notas aclaratorias.</p>
          {data && data.map((item, index) => (
            <div key={index} onClick={() => handleChangeMode(item)}>   
              <details>
                <summary>{item.path}</summary>
              </details>
              {expandedFiles[item.path] && 
                <pre className='code'>{fileContent[item.path]}</pre>
              }
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Code;