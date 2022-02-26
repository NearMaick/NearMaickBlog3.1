import Link from "next/link";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

import styles from "../styles/components/link-button.styles.module.scss";

type LinkButtonProps = {
  link: string;
  description: string;
  icon: ComponentType<IconBaseProps>;
};

export function LinkButton({ link, description, icon: Icon }: LinkButtonProps) {
  return (
    <>
      <Link href={link}>
        <a className={styles.linkButton}>
          <div>
            {description}
            <Icon />
          </div>
        </a>
      </Link>
    </>
  );
}
