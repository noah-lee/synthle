import { useEffect } from 'react';

const useDocumentTitle = (title, fallBackTitle) => {
  useEffect(() => {
    document.title = title;
    return () => fallBackTitle;
  }, [title, fallBackTitle]);
};

export default useDocumentTitle;
