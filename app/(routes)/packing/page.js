import React from 'react';

const page = () => {
  return (
    <div className='pt-16 bg-white text-primary mt-4 px-6'>
      <h1 className='text-lg font-bold py-2 text-center'>Packing List Suggestions</h1>
      <h2 className='font-bold py-2'>Dogs</h2>
      <ul className='px-6'>
        <li>● Leash, backup leash</li>
        <li>● Bowls, food</li>
        <li>● Kennel</li>
        <li>● Alexa for white noise</li>
        <li>● Blanket, rope toy</li>
        <li>● Shampoo, brush</li>
        <li>● Medications (trazadone, benedryl, apoquel)</li>
      </ul>

      <h2 className='font-bold py-2'>Bridesmaids</h2>
      <ul className='px-6'>
        <li>● Olive dress, nude heels, gold earrings</li>
        <li>● Spanx (optional)</li>
        <li>● Nude undergarments (top and bottom for under robe)</li>
        <li>● Maid of Honor vow booklet</li>
      </ul>

      <h2 className='font-bold py-2'>Bride to Bridesmaids</h2>
      <ul className='px-6'>
        <li>● Steamer</li>
        <li>● Gold necklaces</li>
        <li>● White robes, sunglasses</li>
        {/* <li>● Welcome gifts</li> */}
      </ul>

      <h2 className='font-bold py-2'>Groomsmen</h2>
      <ul className='px-6'>
        <li>● Grey suit jacket and pants</li>
        <li>● White dress shirt, white pocket square, grey socks, brown shoes, brown belt</li>
        <li>● Best Man vow booklet</li>
      </ul>

      <h2 className='font-bold py-2'>Groom to Groomsmen</h2>
      <ul className='px-6'>
        <li>● Olive ties</li>
        {/* <li>● Welcome gifts</li> */}
      </ul>

      <h2 className='font-bold py-2'>Officiant</h2>
      <ul className='px-6'>
        <li>● Readings book/binder</li>
        <li>● Portable screen stand, projector</li>
        <li>● Bluetooth speaker, mic, cord</li>
      </ul>

      <h2 className='font-bold py-2'>Other</h2>
      <ul className='px-6'>
        <li>● Rehearsal dinner attire (wedding party)</li>
        <li>● Something old, new, borrowed, and blue, and a six-pence in your shoe! (iykyk)</li>
      </ul>

      <h2 className='font-bold py-2'>Recommended for Hotel Room</h2>
      <ul className='px-6'>
        <li>● Speaker for sleep sounds (if train sounds will wake you)</li>
        <li>● Shower shoes</li>
        <li>● Slippers and robe</li>
        <li>● Travel mirror for getting ready (theirs are quite small)</li>
        <li>● Toiletries (shampoo, conditioner, body wash, razor, toothbrush/paste, skincare, makeup, hair tools, brush, etc.)</li>
        <li>● Phone charger</li>
        <li>● Refillable water bottle</li>
        <li>● Snacks</li>
      </ul>

      <h1 className='font-bold py-2'>Weekend Cabin Getaway (mini Honeymoon)</h1>
      <ul className='px-6'>
        <li>● Travel neck pillow</li>
        <li>● Paddleboards</li>
        <li>● Picnic blanket</li>
        <li>● Swimsuit, towels</li>
        <li>● Sunblock, sun hair protectant, bug spray</li>
        <li>● Ransom wines</li>
        <li>● Snacks and reception leftovers</li>
        <li>● Medications (lactaid, benadryl, tylenol, pepto bismol)</li>
      </ul>
    </div>
  );
}

export default page;

