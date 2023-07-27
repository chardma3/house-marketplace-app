import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Slider from "../components/Slider";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Explore() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Modal is opening!");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="explore">
        <header>
          <div className="headerContainer">
            <p className="pageHeader">Explore</p>
            <AiOutlineQuestionCircle
              onClick={openModal}
              className="questionImg"
            ></AiOutlineQuestionCircle>
          </div>
        </header>

        <main>
          <Slider />
          <Modal isModalOpen={isModalOpen} closeModal={closeModal} />

          <p className="exploreCategoryHeading">Categories</p>
          <div className="exploreCategories">
            <Link to="/category/rent">
              <img
                src={rentCategoryImage}
                alt="rent"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">Places for rent</p>
            </Link>
            <Link to="/category/sale">
              <img
                src={sellCategoryImage}
                alt="sell"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">Places for sale</p>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Explore;
