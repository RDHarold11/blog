import { Link } from "react-router-dom";
import { deleteArticle } from "../features/blog/articleSlice";
import { Fade } from "react-awesome-reveal";
import { useAppDispatch } from "../hooks/store";

const Blogs = ({ articles }) => {
  const dispatch = useAppDispatch();

  const deleteArticles = (id) => {
    dispatch(deleteArticle(id));
  };

  return (
    <>
      <Fade cascade>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Titulo
                </th>
                <th scope="col" className="px-6 py-3">
                  Categoria
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Watch
                </th>
              </tr>
            </thead>
            <tbody>
              {articles?.map((article) => (
                <tr key={article._id}>
                  <>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {article.title}
                    </td>
                    <td className="px-6 py-4">{article.category}</td>
                    <td className="px-6 py-4">
                      {article.description.slice(0, 70)}...
                    </td>
                    <td className="px-6 py-4">
                      <Link className="dark:text-blue-500 hover:underline font-medium" to={`/edit/${article._id}`}>Edit</Link>

                      <a
                        onClick={() => deleteArticles(article._id)}
                        href="#"
                        className="ml-3 font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/blog/${article._id}`} className="underline">
                        Watch
                      </Link>
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fade>
    </>
  );
};

export default Blogs;
