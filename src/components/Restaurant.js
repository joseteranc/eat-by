import React from "react";

function Restaurant(props) {
  return (
    <article>
      <img
        src="/images/cevichejipijapa.jpg"
        width="150"
        height="160"
        alt="ceviche"
      />
      <h3>Title:{props.restaurant.title}</h3>
      <p>Descr.:{props.restaurant.description}</p>
    </article>
  );
}

export default Restaurant;

//this information now is importered
//from restaurantData.js which is located in the api file.
/*function Restaurant() {
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
}*/
