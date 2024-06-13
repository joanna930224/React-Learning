import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    //관례상 변수안에 DOM 요소가 저장될거라는 의미로 $를 붙임
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
