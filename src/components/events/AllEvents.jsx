import React from 'react';
import Events from './Events';

const AllEvents = () => {
  return (
    <div className="mt-5 container-md">
      <h3 className="mb-3">All Events</h3>
      <div className="row">
        <div className="col-12 col-md-6 mb-xl-5">
          <Events
            image1="../images/wow.jpg"
            image2="../images/wow2.jpg"
            image3="../images/wow3.png"
            title="Wow Burger"
            place="Arat kilo, Addis Ababa"
            eventName="A charity auction can be a great way to give back to your
                community and attract people who otherwise may not have dined at
                your restaurant."
          />
        </div>
        <div className="col-12 col-md-6 mb-xl-5">
          <Events
            image1="../images/angla1.jpg"
            image2="../images/angla2.jpg"
            image3="../images/angla3.jpg"
            title="Angla Burger"
            place="Zimbabwe St, Addis Ababa"
            eventName="Our 14th idea has to be Valentine’s Day. Occurring on February 14th, the day has become synonymous with couples. But, it doesn’t have to be that way."
          />
        </div>
        <div className="col-12 col-md-6 mb-xl-5">
          <Events
            image1="../images/wow.jpg"
            image2="../images/wow2.jpg"
            image3="../images/wow3.png"
            title="In-Joy Burger"
            place="Ednamall, Bole, Addis Ababa"
            eventName="Play pranks on your customers or encourage them to do the same for exclusive dishes and discounts. If practical pranks aren’t your thing,"
          />
        </div>

        <div className="col-12 col-md-6 mb-xl-5">
          <Events
            image1="../images/angla1.jpg"
            image2="../images/angla2.jpg"
            image3="../images/angla3.jpg"
            title="Magic Burger"
            place="Dej Wolde Mikael St, Addis Ababa"
            eventName="Sponsoring a local team will get your name out there in the local community. Your logo will be displayed on their kits and maybe a local stadium!"
          />
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
