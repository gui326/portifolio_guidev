import { ButtonProps, Button as ButtonMui } from "@mui/material";

import style from "./style.module.css";

export default function ButtonSecondary(props: ButtonProps) {
  return <ButtonMui className={style.buttonCustom} {...props} />;
}
