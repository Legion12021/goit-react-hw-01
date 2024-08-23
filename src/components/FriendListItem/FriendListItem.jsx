import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div className={css.boxItem}>
        <imd src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
        <p
          className={clsx(css.status, {
            [css.isOnline]: isOnline === true,
            [css.offline]: isOnline === false,
          })}
        >
          {isOnline === true ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
};
export default FriendListItem;
