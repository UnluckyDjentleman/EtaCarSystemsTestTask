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
    dispatch(setPage(offset + limit));
  }, [dispatch, offset]);

  const onClickPrev = useCallback(() => {
    dispatch(setPage(offset - limit));
  }, [dispatch, offset]);
  return (
    <div className="flex inline-flex mt-2 xs:mt-0 justify-center w-auto" data-testid="pg-block">
      {
        offset>0&&(
          <PaginationElement text='Prev' onClick={onClickPrev}/>
        )
      }
      {
        length>0&&(
          <PaginationElement text='Next' onClick={onClickNext}/>
        )
      }
    </div>
  );
}
