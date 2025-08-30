import React from "react";
import "../BlogSection/BlogSection.css";
import { Button } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function BlogSection() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  const handleCategoryClick = (category) => {
    navigate(`/home?category=${category}`);
  };

  return (
    <div className="blog-container">
      <h2 className="blog-heading">
        Mastering Modern AI: RAG, Transformers, and Fine-Tuning Large Language Models
      </h2>
      <p className="blog-para">
        Dive into the world of modern AI...
      </p>
      <div className="main-section">
        <div className="box1">
          <Button
            component={Link}
            to={`/create_blog?category=${currentCategory}`}
            variant="contained"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "none" }
            }}
          >
            Create Blog
          </Button>

          <table className="table">
            <tbody>
              <tr>
                <th>
                  <button
                    className={`category-button ${
                      currentCategory === "" ? "category-active" : ""
                    }`}
                    onClick={() => handleCategoryClick("")}
                  >
                    All Categories
                  </button>
                </th>
              </tr>
              <tr>
                <td>
                  <button
                    className={`category-button ${
                      currentCategory === "Transformers" ? "category-active" : ""
                    }`}
                    onClick={() => handleCategoryClick("Transformers")}
                  >
                    Transformers
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className={`category-button ${
                      currentCategory === "RAGs" ? "category-active" : ""
                    }`}
                    onClick={() => handleCategoryClick("RAGs")}
                  >
                    RAGs
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className={`category-button ${
                      currentCategory === "Machine Learning" ? "category-active" : ""
                    }`}
                    onClick={() => handleCategoryClick("Machine Learning")}
                  >
                    Machine Learning
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className={`category-button ${
                      currentCategory === "Fine Tuning" ? "category-active" : ""
                    }`}
                    onClick={() => handleCategoryClick("Fine Tuning")}
                  >
                    Fine Tuning
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="box2">box2</div>
      </div>
    </div>
  );
}

export default BlogSection;
