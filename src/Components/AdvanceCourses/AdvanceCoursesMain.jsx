import { ListBlock } from "../../Elements/index";

import style from "./AdvanceCoursesMain.module.scss";

function AdvanceCoursesMain() {
  return (
    <>
      <div className={style.main}>
        <ListBlock
          title={'Темы для изучения дисциплины "ТИП"'}
          section={1}
          elems={[
            {
              to: "React",
              text: (
                <p>
                  Учебный курс по <br />
                  <span className={style.markedText}>React</span> (в разработке)
                </p>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

export default AdvanceCoursesMain;
