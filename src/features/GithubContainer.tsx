import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useState } from "react";

const GithubContainer: React.FC = () => {
  const [state, setstate] = useState('')

  // Defining async function
  async function getReadMeapi(name: string, project_name: string): Promise<void> {
    const api_url = `https://raw.githubusercontent.com/${name}/${project_name}/master/README.md`;

    // Storing response
    const response = await fetch(api_url);

    // Storing data in form of JSON
    const data = await response.text();
    setstate(data);
    // return data;
  }

  useEffect(() => {
    getReadMeapi('PeterWorakarn', 'PeterWorakarn');
  }, [])

  return (
    <div className="relative">Github
     
    </div>
  )
}

export default GithubContainer
