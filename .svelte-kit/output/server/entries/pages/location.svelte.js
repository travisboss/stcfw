import { c as create_ssr_component, i as each, j as escape, a as add_attribute } from "../../chunks/index-8b75e422.js";
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let events = [
    {
      header: "Fireworks!",
      body: "St. Cloud Fireworks Committee presents central Minnesota\u2032s Fourth of July Fireworks display.  2022 is the 76th consecutive year for the areas July 4th Fireworks. The 2022 St. Cloud Area Fireworks will be one of the largest pyrotechnics display in central Minnesota on July 4th."
    },
    {
      header: "Hester Park",
      body: "Located on the west bank of the Mississippi River, between 9th and 12th street north, Hester Park provides a family friendly environment for enjoying the entire day. Plenty of green space makes this park a local favorite and a great place to bring the blanket and picnic basket for a day of relaxation.",
      body2: "- Food Vendors Open at 4:00 PM",
      body3: "- Bounce Houses, Inflatables, Launch Pad Opens at 4:00 PM",
      body4: "- Reserved Seating Area Opens at 6:00 PM",
      location: "- St. Cloud Municipal Band 8:30 - 10:00 PM"
    },
    {
      header: "Wilson Park",
      body: "Just off Riverside Drive and across the river from Hester Park, Wilson Park affords spectators with fantastic views of the Fireworks display. Wilson Park also plays host to members of the United States military and their families in a special \u2018Reserved Seating\u2019 area. No reservations needed, simply bring a chair, show your military ID and enjoy the show!",
      body2: "- Food Vendors Open at 4:00 PM",
      body3: "- Beaver Island Brewing Opens at 4:00 PM",
      body4: "- Bounce Houses, Inflatables, Launch Pad Opens at 4:00 PM",
      body5: "- Reserved Seating Area Opens at 2:00 PM",
      body6: "- Music starts at 6:00 PM",
      band: [
        {
          name: "MN13",
          time: "6:00pm to 7:30pm",
          image: "https://i.ibb.co/s5kHXkY/mn13.jpg",
          alt: "mn13"
        },
        {
          name: "HoneyBadgers",
          time: "8:00pm to 10:00pm",
          image: "https://i.ibb.co/LrCxjQC/Honey-Badgers-Logo-RGB.jpg",
          alt: "honeybadgers logo"
        }
      ]
    },
    {
      header: "Mississippi River",
      body: "Boaters and pleasure craft users can take advantage of spectacular viewing from the Mississippi River. Watch for the Marking Buoys and Public Safety Water Craft for approved viewing areas.",
      image: "https://secureservercdn.net/166.62.112.107/e4e.0a7.myftpupload.com/wp-content/uploads/2019/05/locationRiverMap.jpg",
      alt: "map of location"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Location</title>`, ""}`, ""}

<div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content text-left"}"><div class="${"max-w-4xl"}">${each(events, ({ header, body, body2, body3, body4, body5, body6, location, image, alt, band }) => {
    return `<h2 class="${"text-5xl font-bold text-red-500 capitalize"}">${escape(header)}</h2>
				<p class="${"py-2"}">${escape(body)}</p>
				${body2 ? `<p class="${"py-2"}">${escape(body2)}</p>` : ``}
				${body3 ? `<p class="${"py-2"}">${escape(body3)}</p>` : ``}
				${body4 ? `<p class="${"py-2"}">${escape(body4)}</p>` : ``}
				${body5 ? `<p class="${"py-2"}">${escape(body5)}</p>` : ``}
				${body6 ? `<p class="${"py-2"}">${escape(body6)}</p>` : ``}
				${location ? `<p class="${"py-2"}">${escape(location)}</p>` : ``}
				${image ? `<img class="${"aspect-auto"}"${add_attribute("src", image, 0)}${add_attribute("alt", alt, 0)}>` : ``}
				${band ? `${each(band, ({ name, time, image: image2, alt: alt2 }) => {
      return `<ul class="${"list-none"}"><li class="${"pb-2 font-bold"}">${escape(name)} ${escape(time)}</li></ul>
						<img class="${"aspect-auto"}"${add_attribute("src", image2, 0)}${add_attribute("alt", alt2, 0)}>`;
    })}` : ``}`;
  })}
			<h2 class="${"pt-6 text-4xl font-bold text-blue-800 capitalize"}">Fireworks at 10:00pm</h2>
			<p class="${"py-6"}">St. Cloud Fireworks Committee presents central Minnesota\u2032s Fourth of July Fireworks display.
				2022 is the 76th consecutive year for the areas July 4th Fireworks and America\u2019s 246th
				birthday. The 2022 Fireworks will be one of the largest pyrotechnics display in central
				Minnesota on July 4th. Our Fireworks show will be synchronized to a specially selected music
				soundtrack. Great viewing areas are available on both sides of the Mississippi River, in
				Wilson and Hester parks, along 5th Avenue North, and other parts of the community.
			</p>
			<h2 class="${"pt-6 text-3xl font-bold capitalize"}">Life, Liberty, and the Pursuit of Happiness!
			</h2>
			<h2 class="${"pt-6 text-3xl font-bold capitalize"}">Happy Fourth of July 2022!</h2></div></div></div>`;
});
export { Location as default };
