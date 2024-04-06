import React from 'react';

const page = () => {
  return (
    <div className="p-8 bg-white mt-16">
      <div className="flex justify-center p-4 bg-white">
        <h1 className="font-bold text-3xl text-orange text-center">~ Hood River Guide ~</h1>
      </div>

      {/* List of Things to Do */}
      <div className="p-4">
        <h2 className="font-semibold text-2xl mb-4">Things to Do in Hood River & Columbia River Gorge</h2>
        <ul className="tabbed-list">
          {/* Local Events */}
          <li className='mb-2'>
            <strong>Local Events:</strong> <a href='https://visithoodriver.com/' className='text-blue-700 underline'>Hood River Chamber of Commerce</a>
          </li>
          {/* Dine */}
          <li className='mb-2'>
            <strong>Dine:</strong>
            <ul className="bullet-list">
              <li><a href='https://eggrivercafe.com/' className='text-blue-700 underline'>Egg River Cafe</a></li>
              <li><a href='https://riverdazecafe.com/' className='text-blue-700 underline'>River Daze Cafe</a></li>
              <li><a href='https://fullsailbrewing.com/' className='text-blue-700 underline'>Full Sail Brewing</a></li>
              <li><a href='https://fermentbrewing.com/' className='text-blue-700 underline'>Ferment Brewing Company</a></li>
              <li><a href='http://www.brodereast.com/' className='text-blue-700 underline'>Broder Ost</a></li>
              <li><a href='http://solsticehoodriver.com/' className='text-blue-700 underline'>Solstice Wood Fire Cafe</a></li>
              <li><a href='https://sixthstreetbistro.com/' className='text-blue-700 underline'>Six Street Bistro</a></li>
              <li><a href='https://www.pfriembeer.com/' className='text-blue-700 underline'>pFriem Family Brewers</a></li>
              <li><a href='https://www.doublemountainbrewery.com/' className='text-blue-700 underline'>Double Mountain Brewery</a></li>
              <li><a href='https://www.celilorestaurant.com/' className='text-blue-700 underline'>Celilo Restaurant</a></li>
              <li><a href='https://www.bodaskitchen.com/' className='text-blue-700 underline'>Boda's Kitchen</a></li>
              <li><a href='https://camp1805.com/' className='text-blue-700 underline'>Camp 1805</a></li>
              <li><a href='https://riversidehoodriver.com/' className='text-blue-700 underline'>Riverside Restaurant</a></li>
              <li><a href='https://kickstandcoffee.myshopify.com/' className='text-blue-700 underline'>KickStand Coffee & Kitchen</a></li>
              <li><a href='http://www.threeriversgrill.com/' className='text-blue-700 underline'>Three Rivers Grill</a></li>
              <li><a href='https://www.pinestreetbakery.com/' className='text-blue-700 underline'>Pine Street Bakery</a></li>
              {/* Add other dining options */}
            </ul>
          </li>
          {/* Recreation */}
          <li className='mb-2'>
            <strong>Recreation:</strong>
            <ul className="bullet-list">
              <li><a href='https://indiancreekgolf.com/' className='text-blue-700 underline'>Indian Creek Golf Course</a></li>
              <li><a href='https://www.waaamuseum.org/' className='text-blue-700 underline'>Western Antique Aeroplane & Automobile Museum</a></li>
              <li><a href='https://www.hoodriverhistorymuseum.org/' className='text-blue-700 underline'>Hood River History Museum</a></li>
              <li><a href='https://www.fs.usda.gov/recarea/mthood/recarea/?recid=53228' className='text-blue-700 underline'>Lost Lake & Mt Hood National Forest</a></li>
              <li><a href='https://hoodriverparksandrec.org/' className='text-blue-700 underline'>Hood River Parks & Rec</a></li>
              {/* Add other recreation options */}
            </ul>
          </li>
          {/* Agritourism */}
          <li className='mb-2'>
            <strong>Agritourism:</strong>
            <ul className="bullet-list">
            <li><a href='https://gorgegrown.com/hoodriver/' className='text-blue-700 underline'>Hood River Farmers Market</a></li>
              <li><a href='https://hoodriverfruitloop.com/' className='text-blue-700 underline'>Hood River Fruit Loop</a></li>
              <li><a href='http://www.drapergirlsfarm.com/' className='text-blue-700 underline'>Draper Girls Country Farm</a></li>
              <li><a href='https://www.mtvieworchards.com/' className='text-blue-700 underline'>Mt View Orchards</a></li>
              <li><a href='https://hoodriverlavender.com/' className='text-blue-700 underline'>Hood River Lavender Farms</a></li>
              {/* Add other agritourism options */}
            </ul>
          </li>
          {/* Shop */}
          <li className='mb-2'>
            <strong>Shop:</strong>
            <ul className="bullet-list">
                <li><a href='https://aromekitchen.com/' className='text-blue-700 underline'>Arome</a></li>
                <li><a href='https://www.gwtoyshoppe.com/' className='text-blue-700 underline'>G. Williker's Toy Shoppe</a></li>
                <li><a href='https://www.parts-labour.com/' className='text-blue-700 underline'>Parts & Labour</a></li>
                <li><a href='https://www.gorgedog.com/' className='text-blue-700 underline'>Gorge Dog</a></li>
                <li><a href='https://www.ruddyduckhoodriver.com/' className='text-blue-700 underline'>The Ruddy Duck</a></li>
                <li><a href='http://twiggshoodriver.com/' className='text-blue-700 underline'>Twiggs</a></li>
                <li><a href='https://www.waucomabookstore.com/' className='text-blue-700 underline'>Waucoma Bookstore</a></li>
                <li><a href='https://www.facebook.com/HoodRiverStationers/' className='text-blue-700 underline'>Hood River Stationers</a></li>
                <li><a href='https://gorgegreenery.com/welcome' className='text-blue-700 underline'>Gorge Greenery</a></li>
              {/* Add other shopping options */}
            </ul>
          </li>
          {/* Drink */}
          <li className='mb-2'>
            <strong>Drink:</strong>
            <ul className="bullet-list">
                <li><a href='https://evokewinery.com/' className='text-blue-700 underline'>Evoke Winery</a></li>
                <li><a href='https://dogrivercoffee.square.site/' className='text-blue-700 underline'>Dog River Coffee</a></li>
                <li><a href='https://staveandstone.com/' className='text-blue-700 underline'>Stave & Stone Winery</a></li>
                <li><a href='https://www.hrdspirits.com/' className='text-blue-700 underline'>Hood River Distillers</a></li>
                <li><a href='https://www.workinghandsfermentation.com/' className='text-blue-700 underline'>Working Hands Beer</a></li>
                <li><a href='https://64taphouse.com/' className='text-blue-700 underline'>64oz Tap House</a></li>
                <li><a href='https://www.hoodrivercommonhouse.com/' className='text-blue-700 underline'>Hood River Common House</a></li>
                <li><a href='https://www.groundhoodriver.com/' className='text-blue-700 underline'>Ground Coffee</a></li>
                <li><a href='https://www.hoodcrestwinery.com/' className='text-blue-700 underline'>Hood Crest Winery</a></li>
                <li><a href='http://www.doppiohoodriver.com/' className='text-blue-700 underline'>Doppio Coffee & Lounge</a></li>
                <li><a href='https://anichecellars.com/' className='text-blue-700 underline'>Aniche Cellars</a></li>
                <li><a href='https://cathedralridgewinery.com/' className='text-blue-700 underline'>Cathedral Ridge Winery</a></li>
                <li><a href='https://www.stokedroasters.com/' className='text-blue-700 underline'>Stoked Roasters</a></li>
                <li><a href='https://www.marchesivineyards.com/' className='text-blue-700 underline'>Marchesi Vineyards</a></li>
                <li><a href='https://wanderback.com/' className='text-blue-700 underline'>Wanderback Whiskey Co</a></li>
                <li><a href='https://www.goodmedicinetea.com/' className='text-blue-700 underline'>Good Medicine Tea</a></li>
                <li><a href='https://drinkupsidedownwine.com/' className='text-blue-700 underline'>Upside Down Wine</a></li>
                <li><a href='https://www.thegorgewhitehouse.com/' className='text-blue-700 underline'>The Gorge White House</a></li>
              {/* Add other drink options */}
            </ul>
          </li>
          {/* Tours & Guides */}
          <li className='mb-2'>
            <strong>Tours & Guides:</strong>
            <ul className="bullet-list">
                <li><a href='https://mountnbarrel.com' className='text-blue-700 underline'>MountNbarreL Guided Tours</a></li>
                <li><a href='https://www.martinsgorgetours.com' className='text-blue-700 underline'>Martin's Gorge Tours</a></li>
                <li><a href='https://oregonmotorcyclerental.com/newsite' className='text-blue-700 underline'>Oregon Motorcycle Rental</a></li>
                <li><a href='https://www.zooraft.com' className='text-blue-700 underline'>Zoller's Outdoor Odysseys</a></li>
              {/* Add other tour and guide options */}
            </ul>
          </li>
          {/* Art & Culture */}
          <li className='mb-2'>
            <strong>Art & Culture:</strong>
            <ul className="bullet-list">
                <li><a href='https://www.gorgeartists.org/' className='text-blue-700 underline'>Gorge Artists</a></li>
                <li><a href='https://301gallery.com/' className='text-blue-700 underline'>301 Gallery</a></li>
                <li><a href='https://www.columbiaarts.org/' className='text-blue-700 underline'>Columbia Center for the Arts</a></li>
                <li><a href='https://art-of-community.com/' className='text-blue-700 underline'>Art of Community</a></li>
                <li><a href='https://www.madeinthegorge.com/ ' className='text-blue-700 underline'>Made in the Gorge</a></li>
              {/* Add other art and culture options */}
            </ul>
          </li>
          {/* Relax & Restore */}
          <li>
            <strong>Relax & Restore:</strong>
            <ul className="bullet-list">
            <li><a href='https://www.flowhoodriver.com/' className='text-blue-700 underline'>Flow Yoga</a></li>
            <li><a href='https://www.machi.yoga/' className='text-blue-700 underline'>Machi Yoga</a></li>
            <li><a href='https://www.subisalon.com/' className='text-blue-700 underline'>Subi Salon</a></li>
            <li><a href='https://www.societyxsatori.com/' className='text-blue-700 underline'>Society x Satori</a></li>
            <li><a href='https://www.gorgebodytherapy.com/' className='text-blue-700 underline'>Gorge Body Therapy</a></li>
              {/* Add other relaxation options */}
            </ul>
          </li>
        </ul>
      </div>

      {/* In Case of Emergency */}
      <div className="p-4">
        <h2 className="font-semibold text-2xl">In Case of Emergency:</h2>
        <li><a href='https://www.providence.org/locations/or/hood-river-memorial-hospital' className='text-blue-700 underline'>Providence Hood River Memorial Hospital</a></li>
      </div>
    </div>
  );
};

export default page;
