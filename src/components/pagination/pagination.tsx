import { useCallback } from "react";
import { useAppDispatch } from "../../utils/hooks/useRedux";
import { setPage } from "../../store/reducers/filterReducer";
import PaginationElement from "../shared/paginationElement";

export default function Pagination({
  limit,
  offset,
  length,
}: {
  limit: number;
  offset: number;
  length: number;
}) {
  const dispatch = useAppDispatch();
  const onClickNext = useCallback(() => {
    dispatch(setPage(offset + 1));
  }, [dispatch, offset]);

  const onClickPrev = useCallback(() => {
    dispatch(setPage(offset - 1));
  }, [dispatch, offset]);
  return (
    <div
      className="max-w-[150px] mx-auto mt-6 mb-6 flex flex-row items-center justify-between"
      data-testid="pg-block"
    >
      <PaginationElement
        text="Prev"
        onClick={onClickPrev}
        isAbled={offset > 0}
      />
      <PaginationElement
        text="Next"
        onClick={onClickNext}
        isAbled={length===limit}
      />
    </div>
  );
}
