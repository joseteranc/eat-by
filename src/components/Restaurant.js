import React from "react";
function Restaurant() {
  return (
    <article className="restaurant">
      <div className="foto">
        <img
          classNmae="ceviche"
          src="/images/cevichejipijapa.jpg"
          width="150"
          height="160"
          alt="ceviche"
        ></img>
      </div>
      <div class="infos">
        <h3>El ceviche</h3>
        <p>delicious specialties of the Ecuadorian coast</p>
      </div>
    </article>
  );
}
export default Restaurant;
