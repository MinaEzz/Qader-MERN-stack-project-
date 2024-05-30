import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  fetchProducts,
}) => {
  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={(page) => {
        setCurrentPage(page);
        fetchProducts(page);
        window.scroll({
          top: 26,
          behavior: "smooth",
        });
      }}
      className="w-full m-auto py-2 px-4 flex justify-center items-center gap-1"
      pageItemClassName="text-slate-700 border border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all ease-in-out"
      activeItemClassName="bg-primary-700 text-white font-medium"
      pageLinkClassName="text-lg py-1.5 px-2"
    />
  );
};

export default Pagination;
