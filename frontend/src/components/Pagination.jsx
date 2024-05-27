import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Pagination = ({ totalPages = 10, fetchProductsByPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 20;

  // function handlePageChange(page) {
  //   setCurrentPage(page);
  //   fetchProductsByPage(page);
  //   window.scroll({
  //     top: window.innerHeight,
  //     behavior: "smooth",
  //   });
  // }

  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
      className="w-full m-auto py-2 px-4 flex justify-center items-center gap-1"
      pageItemClassName="text-slate-700 border border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all ease-in-out"
      activeItemClassName="bg-primary-700 text-white font-medium"
      pageLinkClassName="text-lg py-1.5 px-2"
    />
  );
};

export default Pagination;
