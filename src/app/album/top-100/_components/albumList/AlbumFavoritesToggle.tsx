import ToggleSwitch from "@THTS/UI/components/Switch/Switch";
import cx from "classnames"

type AlbumFavoritesToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;

}

const AlbumFavoritesToggle = ({
  checked, onChange, className
}: AlbumFavoritesToggleProps) => {
  return (
    <div className="flex items-center gap-3">
      <ToggleSwitch
        checked={checked}
        onChange={onChange}
      />
      <label className={cx("text-grey-700 cursor-pointer", className)} htmlFor="favorites-toggle">Show Favorites</label>
    </div>
  );
}


export default AlbumFavoritesToggle
