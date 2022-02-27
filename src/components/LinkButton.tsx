import Link, { LinkProps } from "next/link";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

import styles from "../styles/components/link-button.styles.module.scss";

interface ILinkButtonProps {
  link: string;
  description: string;
  icon: ComponentType<IconBaseProps>;
}

export function LinkButton({
  link,
  description,
  icon: Icon,
}: ILinkButtonProps) {
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
