import React from "react";

const BlogPost = ({
  bm_blog_id,
  bm_name,
  bm_desc,
  bm_shortdesc,
  bm_image,
  bm_banner_image,
  bm_category_code,
  bm_auther_name,
  bm_auther_image,
  bm_auther_desc,
  bm_posted_by,
  bm_inserted_on,
  bm_inserted_by,
  bm_author,
  bm_author_designation,
  bm_posted_on,
  bm_posted_on_var,
  bm_isactive,
}) => {
  return (
    <>
      <article id={bm_blog_id}>
        <h3>{bm_name}</h3>
      </article>
    </>
  );
};

export default BlogPost;
