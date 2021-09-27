import React from "react";
import "./css/swipeButtons.css";
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeCards = () => {
  return (
    <div className="swipeIcons">
      <IconButton>
        <ReplyIcon className="swipeButton__replay" fontSize="large" />
      </IconButton>
      <IconButton>
        <CloseIcon className="swipeButton__close" fontSize="large" />
      </IconButton>
      <IconButton>
        <StarRateIcon className="swipeButton__star" fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteIcon className="swipeButton__fav" fontSize="large" />
      </IconButton>
      <IconButton>
        <FlashOnIcon className="swipeButton__flash" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeCards;
